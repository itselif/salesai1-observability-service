const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { ObservabilityShareToken } = require("models");
const { Op } = require("sequelize");

const getIdListOfObservabilityShareTokenByField = async (
  fieldName,
  fieldValue,
  isArray,
) => {
  try {
    let isValidField = false;

    const observabilityShareTokenProperties = [
      "id",
      "configName",
      "objectName",
      "objectId",
      "ownerId",
      "peopleOption",
      "tokenPermissions",
      "allowedEmails",
      "expireDate",
      "storeId",
    ];

    isValidField = observabilityShareTokenProperties.includes(fieldName);

    if (!isValidField) {
      throw new BadRequestError(`Invalid field name: ${fieldName}.`);
    }

    const expectedType = typeof ObservabilityShareToken[fieldName];

    if (typeof fieldValue !== expectedType) {
      throw new BadRequestError(
        `Invalid field value type for ${fieldName}. Expected ${expectedType}.`,
      );
    }

    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let observabilityShareTokenIdList =
      await ObservabilityShareToken.findAll(options);

    if (
      !observabilityShareTokenIdList ||
      observabilityShareTokenIdList.length === 0
    ) {
      throw new NotFoundError(
        `ObservabilityShareToken with the specified criteria not found`,
      );
    }

    observabilityShareTokenIdList = observabilityShareTokenIdList.map(
      (item) => item.id,
    );
    return observabilityShareTokenIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingObservabilityShareTokenIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfObservabilityShareTokenByField;
