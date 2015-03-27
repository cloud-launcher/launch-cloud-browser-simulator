import core from 'launch-cloud-core';

import digitalocean from 'provider-digitalocean/.dist/provider/simulator';

import request from 'browser-request';

const proxies = {
  // dockerHubApiRoot: 'http://localhost:3408',
  // discoveryEtcdApiRoot: 'http://localhost:3409'
  dockerHubApiRoot: 'http://104.154.35.244',
  discoveryEtcdApiRoot: 'http://23.236.50.60'
};

module.exports = (providerConfigs, log) => {
  if (providerConfigs === undefined || providerConfigs === null) throw Error('Must provide a providerConfigs object!');

  const launchCloud = core({
    providers: {
      digitalocean: digitalocean()
    },
    providerConfigs,
    log,
    request,
    proxies
  });

  return launchCloud;
};