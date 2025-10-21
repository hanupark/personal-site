"use server";

/**
 * Server-side password verification for protected content.
 * Password is stored in environment variable and never sent to client.
 */
export async function verifyNowadaysPassword(password: string) {
  // Get password from environment variable
  const correctPassword = process.env.NOWADAYS_PASSWORD;

  if (!correctPassword) {
    console.error("NOWADAYS_PASSWORD environment variable not set");
    return { success: false, error: "Server configuration error" };
  }

  return {
    success: password === correctPassword,
    error: password === correctPassword ? undefined : "Incorrect password"
  };
}
