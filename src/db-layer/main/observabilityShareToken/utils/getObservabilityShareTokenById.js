const { HttpServerError } = require("common");

let { ObservabilityShareToken } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getObservabilityShareTokenById = async (observabilityShareTokenId) => {
  try {
    const observabilityShareToken = Array.isArray(observabilityShareTokenId)
      ? await ObservabilityShareToken.findAll({
          where: {
            id: { [Op.in]: observabilityShareTokenId },
            isActive: true,
          },
        })
      : await ObservabilityShareToken.findOne({
          where: {
            id: observabilityShareTokenId,
            isActive: true,
          },
        });

    if (!observabilityShareToken) {
      return null;
    }
    return Array.isArray(observabilityShareTokenId)
      ? observabilityShareToken.map((item) => item.getData())
      : observabilityShareToken.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingObservabilityShareTokenById",
      err,
    );
  }
};

module.exports = getObservabilityShareTokenById;
