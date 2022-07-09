'use strict';

module.exports = async () => {
  // Add permissions
  const actions = [
    {
      section: 'plugins',
      displayName: 'Access the Import Export page',
      uid: 'read',
      pluginName: 'import-export-content',
    },
  ];

  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
