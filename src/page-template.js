// create the name section
const generateProjectName = projectnameText => {
  if (!projectnameText) {
    return '';
  }

  return `# ${projectnameText}
  `;
};

const generateDescription = descriptionText => {
  if (!descriptionText) {
    return '';
  }

  return `${descriptionText}
  `;
};

const generateWebsite = websiteText => {
  if (!websiteText) {
    return '';
  }

  return `${websiteText}
  `;
};

const generateScreenshot = screenshotText => {
  if (!screenshotText) {
    return '';
  }

  return `${screenshotText}
  `;
};

module.exports = templateData => {
  // destructure page data by section
  const { projectname, description, website, screenshot } = templateData;

  return `${generateProjectName(projectname)}
  ## Description
  ${generateDescription(description)}
  ## Website
  ${generateWebsite(website)}
  ## Screenshot
  ${generateScreenshot(screenshot)}`;
};