export const formatLinkPath = (linkPath) =>
  linkPath
    .split("/")[1]
    .split("-")
    .map((word) =>
      word.length > 3 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");
