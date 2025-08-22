const { HttpServerError, NotFoundError } = require("common");
const { hexaLogger } = require("common");

const {
  AuditLog,
  MetricDatapoint,
  AnomalyEvent,
  ObservabilityShareToken,
} = require("models");
const { Op } = require("sequelize");

const getObservabilityShareTokenAggById = async (observabilityShareTokenId) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const observabilityShareToken = Array.isArray(observabilityShareTokenId)
      ? await ObservabilityShareToken.findAll({
          where: {
            id: { [Op.in]: observabilityShareTokenId },
            isActive: true,
          },
          include: includes,
        })
      : await ObservabilityShareToken.findOne({
          where: {
            id: observabilityShareTokenId,
            isActive: true,
          },
          include: includes,
        });

    if (!observabilityShareToken) {
      return null;
    }

    const observabilityShareTokenData =
      Array.isArray(observabilityShareTokenId) &&
      observabilityShareTokenId.length > 0
        ? observabilityShareToken.map((item) => item.getData())
        : observabilityShareToken.getData();
    await ObservabilityShareToken.getCqrsJoins(observabilityShareTokenData);
    return observabilityShareTokenData;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingObservabilityShareTokenAggById",
      err,
    );
  }
};

module.exports = getObservabilityShareTokenAggById;
