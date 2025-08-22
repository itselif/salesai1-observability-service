const { HttpServerError, BadRequestError } = require("common");

const { ObservabilityShareToken } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getObservabilityShareTokenListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const observabilityShareToken = await ObservabilityShareToken.findAll({
      where: { ...query, isActive: true },
    });

    //should i add not found error or only return empty array?
    if (!observabilityShareToken || observabilityShareToken.length === 0)
      return [];

    //      if (!observabilityShareToken || observabilityShareToken.length === 0) {
    //      throw new NotFoundError(
    //      `ObservabilityShareToken with the specified criteria not found`
    //  );
    //}

    return observabilityShareToken.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingObservabilityShareTokenListByQuery",
      err,
    );
  }
};

module.exports = getObservabilityShareTokenListByQuery;
