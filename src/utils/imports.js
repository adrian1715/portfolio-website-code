export async function imports(src) {
  try {
    await import(src);
  } catch (err) {
    console.log(err);
  }
}
