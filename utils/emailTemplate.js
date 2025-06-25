const subscribeTemplate = (email) => {
  return `<html><body><h1>${email} want to subscribe newsletter</h1></body></html>`;
};

const partnerTemplate = (partnerRequest) => {
  return `<html><body><h1>${partnerRequest.email} want to partner with Affilyit</h1></body></html>`;
};

module.exports = { subscribeTemplate, partnerTemplate };
