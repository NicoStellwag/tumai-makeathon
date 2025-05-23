import { updateSession } from "@/utils/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api (API routes)
     * - auth (auth routes like login, register, callback)
     * - onboarding (onboarding flow routes)
     * - images/ (your image directory if any)
     * - report (report page)
     * - / (the root path - already handled by page.tsx)
     */
    "/((?!_next/static|_next/image|favicon.ico|api|auth|onboarding|images|report|^/$).+)",
  ],
};
