import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@gtper/services/auth/auth.service";


export const authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthAdmin()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
}
