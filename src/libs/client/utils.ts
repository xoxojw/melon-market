export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const randomName = (payload: { phone?: number; email?: string }) => {
  if (payload.phone !== undefined) {
    return `User ${payload.phone.toString().slice(-4)}`;
  } else if (payload.email !== undefined) {
    return `User ${payload.email.split("@")[0]}`;
  } else {
    return "기본닉네임";
  }
};
