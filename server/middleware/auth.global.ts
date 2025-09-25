import { defineNuxtRouteMiddleware, useFetch, navigateTo } from "nuxt/app";
import { authClient } from "../../lib/auth-client";
export default defineNuxtRouteMiddleware(async (to, from) => {
	const { data: session } = await authClient.useSession(useFetch); 
	if (!session.value) {
		if (to.path === "/admin") {
			return navigateTo("/login");
		}
	}
});