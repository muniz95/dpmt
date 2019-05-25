export const selectJobOpportunities = (document: Document) => document;

export const selectJobApplications = (document: Document) => {
  const applications = Array.from(document.getElementsByClassName("canItem"));
  console.log(applications.map((element: Element) => {
    return {
      closed: element.classList.contains("closed"),
      company: element.children[0].children[1].textContent,
      distance: element.children[0].children[4].textContent,
      jobTitle: element.children[0].children[0].textContent,
      match: element.children[0].children[2].textContent,
      state: element.children[0].children[3].textContent,
    };
  }));
};
