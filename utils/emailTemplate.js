const subscribeTemplate = (email) => {
  return `<html>
  <body>
    <h3>${email} want to subscribe newsletter</h3>
    <p>Hi Gi! Here is a new subscribe request, please kindly add above user to your publish list!</p>
    <br />
    <br />
    <p>
    Best Regards, <br>
    Zhonghua Bao
    </p>
  </body>
  </html>
  `;
};

const partnerTemplate = (partnerRequest) => {
  return `<html>
  <body>
    <h3>${partnerRequest.email} want to partner with Affilyit</h3>
    <p>Hi Gi! Here goes the detail of a new partnership request</p>
    <br />
    <ui>
	    <li><strong>Name:</strong> ${partnerRequest.name}</li>
        <li><strong>Email:</strong> ${partnerRequest.email}</li>
        <li><strong>Phone number:</strong> ${partnerRequest.phoneNumber}</li>
        <li><strong>Website:</strong> ${partnerRequest.website}</li>
        <li><strong>Tiktok shop link:</strong> ${partnerRequest.tiktokShop}</li>
        <li><strong>Product revenue:</strong> ${partnerRequest.revenue}</li>
        <li><strong>Is product halal:</strong> ${partnerRequest.isProductHalal}</li>
        <li><strong>Brand intro & why partner with Affilyit:</strong> ${partnerRequest.message}</li>
    </ui>
    <br />
    <p>Please kindly contact that user, and wish you good luck with a new partnership!</p>
    <br />
    <br />
    <p>
    Best Regards, <br>
    Zhonghua Bao
    </p>
  </body>
  </html>
  `;
};

module.exports = { subscribeTemplate, partnerTemplate };
