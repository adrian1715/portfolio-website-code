export const isCurrentPage = (pathname, pagesUrls) =>
  pagesUrls.some((page) => pathname.includes(page));
