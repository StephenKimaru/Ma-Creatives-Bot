const verifiedUsers = new Set();

export function verifyUser(userId) {
  verifiedUsers.add(userId);
}

export function removeVerification(userId) {
  verifiedUsers.delete(userId);
}

export function isVerified(userId) {
  return verifiedUsers.has(userId);
}
