module.exports = function (fileInfo, api, options) {
  const j = api.jscodeshift;
  return fileInfo.source
    .replace(
      'if (!finish_reason)',
      `        //@ts-ignore
        finish_reason = !finish_reason ?? snapshot.finish_reason;
        if (!finish_reason)`,
    )
    .replace(
      `const role = message.role as 'assistant';`,
      `        //@ts-ignore
        const role = message.role as 'assistant' || 'assistant';`,
    );
};
