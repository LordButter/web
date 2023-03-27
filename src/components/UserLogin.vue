<template>
    <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div class="flex-auto px-4 lg:px-10 py-10">
                        <form @submit.prevent="authUser">
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >Email</label>
                                <input
                                    type="email"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Email"
                                    style="transition: all 0.15s ease 0s;"
                                    v-model="email"
                                />
                            </div>
                            <div class="relative w-full mb-3">
                                <label
                                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >Password</label>
                                <input
                                    type="password"
                                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Password"
                                    style="transition: all 0.15s ease 0s;"
                                    v-model="password"
                                />
                            </div>
                            <div v-if="passwordInvalid" class="mt-3">
                                <span class="block uppercase text-red-500 text-xs font-bold">
                                    Credentials invalid!
                                </span>
                            </div>
                            <div class="text-center mt-6">
                                <button
                                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                    type="submit"
                                    style="transition: all 0.15s ease 0s;"
                                >
                                Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PocketBase from 'pocketbase';

    const PBClient = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
    console.log(import.meta.env.VITE_POCKETBASE_URL)

    export default {
        data(){
            return {
                email: '',
                password: '',
                passwordInvalid: false,
            };
        },

        methods: {
            async authUser(){
                try{
                    const userData = await PBClient.collection('users').authWithPassword(
                        this.email, 
                        this.password
                    );
                    console.log(userData)
                    if (userData){
                        this.$store.commit('setUserData', {
                            userId: userData.record.id,
                            username: userData.record.name,
                            userProfileId: userData.record.username,
                        });
                        this.$router.push({ path: '/' });
                    } else {
                        this.passwordInvalid = true;
                        console.log("User konnte nicht Auth werden.");
                    }
                } catch (err) {
                    this.passwordInvalid = true;
                    console.log(err);
                }
            },
        },
    }
</script>