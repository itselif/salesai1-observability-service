const { HttpServerError } = require("common");

const { ObservabilityShareToken } = require("models");
const { Op } = require("sequelize");

const updateObservabilityShareTokenByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await ObservabilityShareToken.update(
      dataClause,
      options,
    );
    const observabilityShareTokenIdList = rows.map((item) => item.id);
    return observabilityShareTokenIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenUpdatingObservabilityShareTokenByIdList",
      err,
    );
  }
};

module.exports = updateObservabilityShareTokenByIdList;
