require 'net/ssh/proxy/command'
require 'sshkit'
require 'sshkit/dsl'
include SSHKit::DSL

SSHKit.config.output_verbosity = :debug

SSHKit::Backend::Netssh.configure do |ssh|
  ssh.ssh_options = {
    proxy: Net::SSH::Proxy::Command.new('ssh -W %h:%p master@54.168.130.72')
  }
end

run_locally do
  execute 'ng build --configuration staging'
  execute 'env GZIP=-9 tar -zcvf dist.tar.gz dist'
end

on 'deploy@10.0.1.63' do
  execute 'mkdir -p/home/deploy/client/current/dist'
  upload! 'dist.tar.gz', "/home/deploy/client/current"
  execute 'rm -r /home/deploy/client/current/dist && cd /home/deploy/client/current && tar xvf dist.tar.gz'
end