export enum REGULAR_PATHS {
  HOME = "/",
  OUR_FIRM = "/our-firm",
  PRACTICE_AREAS = "/practice-areas",
  CASE_STUDIES = "/case-studies",
  CONTACT = "/contact",
  BLOG = "/blog",

  //backend
  STRATAGEM_ADMIN = "/stratagem-admin",
  REGISTER = "/stratagem-admin/register",
  LOGIN = "/stratagem-admin/login",
  BLOG_CONTENT = "/stratagem-admin/blog-content",
  CASE_STUDIES_POST = "/stratagem-admin/case-studies-post",

  //sub pages
  PRACTICE_AREA = `/practice-areas/practice-area/:data`,
  CASE_STUDY = `/case-studies/case-study/:data`,
  BLOG_POST = `/blog/blog-post/:data`,
}
