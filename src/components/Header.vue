<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

    const navigation = [
        { name: 'Dashboard', href: '/' },
        { name: 'Resume', href: '/resume' },
        { name: 'Application', href: '/application' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
    ]
</script>

<template>
    <Disclosure as="nav" class="bg-gray-900" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" 
                            class="block h-6 w-6" 
                            aria-hidden="true" />
                        <XMarkIcon v-else 
                            class="block h-6 w-6" 
                            aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="block h-8 w-auto lg:hidden" 
                            src="/terminal-icon.png" 
                            alt="Your Company" />
                        <img class="hidden h-8 w-auto lg:block" 
                            src="/terminal-icon.png" 
                            alt="Your Company" />
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-2">
                            <a v-for="item in navigation" 
                                :key="item.name" 
                                @click="this.$router.push({path: item.href})" 
                                :class="[this.$route.path == item.href ? 'bg-gray-800 text-white cursor-default' : 'text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="this.$route.path == item.href ? 'page' : undefined">
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <!-- Profile dropdown -->
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" 
                                    :src="`https://ui-avatars.com/api/?name=${this.$store.state.username.replace(' ', '+')}&size=512`" 
                                    alt=""/>
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" 
                            enter-from-class="transform opacity-0 scale-95" 
                            enter-to-class="transform opacity-100 scale-100" 
                            leave-active-class="transition ease-in duration-75" 
                            leave-from-class="transform opacity-100 scale-100" 
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                    <a href="#" 
                                        :class="[active ? 'bg-gray-300' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700']">
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a href="#" 
                                        :class="[active ? 'bg-gray-300' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700']">
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                    <a @click="logout" 
                                        :class="[active ? 'bg-gray-300' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700']">
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton v-for="item in navigation" 
                    :key="item.name" 
                    as="a" 
                    @click="this.$router.push({path: item.href})" 
                    :class="[this.$route.path == item.href ? 'bg-gray-900 text-white cursor-default' : 'text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="this.$route.path == item.href ? 'page' : undefined">
                    {{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.commit('clear');
            this.$pb.authStore.clear();
            this.$router.push({ path: '/login' });
        }
    },
}
</script>