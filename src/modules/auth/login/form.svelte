<script>
  import { Eye, EyeOff, Mail, Lock } from "@lucide/svelte";

  let showPassword = $state(false);
  let email = $state("");
  let password = $state("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login attempt:", { email, password });
  }

  function togglePassword() {
    showPassword = !showPassword;
  }
</script>

<form onsubmit={handleSubmit} class="space-y-4">
  <!-- Email Field -->
  <div class="space-y-2">
    <label for="email" class="text-sm font-medium text-gray-700">
      Correo electrónico
    </label>
    <div class="relative">
      <Mail class="absolute left-3 top-4 h-4 w-4 text-gray-400" />
      <input
        id="email"
        type="email"
        placeholder="tu@email.com"
        bind:value={email}
        class="w-full pl-10 h-12 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        required
      />
    </div>
  </div>

  <div class="space-y-2">
    <label for="password" class="text-sm font-medium text-gray-700">
      Contraseña
    </label>
    <div class="relative">
      <Lock class="absolute left-3 top-4 h-4 w-4 text-gray-400" />
      <input
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        bind:value={password}
        class="w-full pl-10 pr-10 h-12 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        required
      />
      <button
        type="button"
        onclick={togglePassword}
        class="absolute right-3 top-4 text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        {#if showPassword}
          <EyeOff class="h-4 w-4" />
        {:else}
          <Eye class="h-4 w-4" />
        {/if}
      </button>
    </div>
  </div>

  <button
    type="submit"
    class="w-full h-12 bg-gradient-to-r from-primary-500 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white font-medium rounded-md transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
  >
    Iniciar Sesión
  </button>
</form>
