export async function isAdminUser(id : string | null ) {
  return id === process.env.ADMIN_USER_ID;
}
