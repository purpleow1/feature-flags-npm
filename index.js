let featureFlags = {};

// TODO: Change to array?
const response = {
  functionality_1: true,
  functionality_2: false,
  very_cool_feature: true
}

exports.init = async function() {
  await new Promise((res) => { setTimeout(() => res(), 2000) });

  featureFlags = response;
}

exports.checkFeatureEnabled = function(featureName) {
  return Boolean(featureFlags[featureName]);
}