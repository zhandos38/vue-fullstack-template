<template>
  <div>
    <header
      class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700"
    >
      <nav
        class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div class="mr-5 lg:mr-0 lg:hidden">
          <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand"
            >FullStack is Cool</a
          >
        </div>

        <div
          class="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3"
        >
          <div class="sm:hidden">
            <button
              type="button"
              class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            >
              <svg
                class="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </div>

          <div class="hidden sm:block"></div>

          <div class="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            >
              <svg
                class="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                />
              </svg>
            </button>
            <button
              type="button"
              class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <svg
                class="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </button>

            <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                <img
                  class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="/user.png"
                  alt="Image Description"
                />
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                aria-labelledby="hs-dropdown-with-header"
              >
                <div class="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                  <p class="text-sm text-gray-500 dark:text-gray-400">Вошли как</p>
                  <p class="text-sm font-medium text-gray-800 dark:text-gray-300">james@site.com</p>
                </div>
                <div class="mt-2 py-2 first:pt-0 last:pb-0">
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                    @click="logout()"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-door-open"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                      <path
                        d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"
                      />
                    </svg>
                    Выйти
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <!-- ========== END HEADER ========== -->

    <!-- Sidebar Toggle -->
    <div
      class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center py-4">
        <!-- Navigation Toggle -->
        <button
          ref="navigationToggle"
          type="button"
          class="text-gray-500 hover:text-gray-600"
          data-hs-overlay="#application-sidebar-dark"
          aria-controls="application-sidebar-dark"
          aria-label="Toggle navigation"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <!-- End Navigation Toggle -->

        <!-- Breadcrumb -->
        <ol class="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
          <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
            App
            <svg
              class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li
            class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
            aria-current="page"
          >
            Dashboard
          </li>
        </ol>
        <!-- End Breadcrumb -->
      </div>
    </div>
    <!-- End Sidebar Toggle -->

    <!-- Sidebar -->
    <div
      id="application-sidebar-dark"
      class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-900 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0"
    >
      <div class="px-6 text-center">
        <a class="flex-none text-xl font-semibold text-white text-4xl" href="/" aria-label="Brand"
          >Admin Panel</a
        >
      </div>

      <nav
        class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul class="space-y-1.5">
          <li v-for="menuItem of menuItems" :key="menuItem.routeName">
            <a
              class="menu-item"
              @click="menuLinkClickHandler(menuItem.routeName)"
              :class="{ 'menu-item--active': checkIsActiveRouteByName(menuItem.routeName) }"
            >
              <i :class="menuItem.iconClass"></i>
              {{ menuItem.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- End Sidebar -->

    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RoutesEnum } from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const navigationToggle = ref()

const checkIsActiveRouteByName = (routeName: RoutesEnum) => {
  return route.name === routeName
}

const logout = () => {
  authStore.logout()
}

const menuLinkClickHandler = (routeName: string) => {
  router.push({ name: routeName })
  // navigationToggle.value.click();
}

const menuItems = [
  {
    label: 'Главная',
    routeName: RoutesEnum.HOME,
    iconClass: 'pi pi-home'
  },
  {
    label: 'Пользователи',
    routeName: RoutesEnum.USERS,
    iconClass: 'pi pi-users'
  },
  {
    label: 'Категория товаров',
    routeName: RoutesEnum.CATEGORY,
    iconClass: 'pi pi-list'
  },
]
</script>

<style lang="scss" scoped>
.menu-item {
  @apply flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-400 rounded-md cursor-pointer;

  &--active {
    @apply bg-gray-700 text-white;
  }
}
</style>
