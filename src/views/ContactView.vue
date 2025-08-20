<template>
  <section class="min-w-[1024px] min-h-screen bg-blue flex items-center justify-center px-4">
    <div class="max-w-2xl w-full bg-gray-50 rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Contactez-moi</h2>
      <form @submit.prevent="sendEmail" ref="form" class="space-y-4">
        <!-- NOM -->
        <div>
          <label class="block mb-1 font-medium">Nom</label>
          <input v-model="formData.name" type="text" name="name" class="w-full border px-4 py-2 rounded-lg"
            :class="{ 'border-red-500': errors.name }" />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <!-- EMAIL -->
        <div>
          <label class="block mb-1 font-medium">Email</label>
          <input v-model="formData.email" type="email" name="email" class="w-full border px-4 py-2 rounded-lg"
            :class="{ 'border-red-500': errors.email }" />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- MESSAGE -->
        <div>
          <label class="block mb-1 font-medium">Message</label>
          <textarea v-model="formData.message" name="message" rows="5" class="w-full border px-4 py-2 rounded-lg"
            :class="{ 'border-red-500': errors.message }"></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>

        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Envoyer
        </button>

        <p v-if="status" class="text-sm mt-2 text-center">{{ status }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
//import emailjs from 'emailjs-com'

const form = ref(null)
const status = ref('')
const formData = ref({
  name: '',
  email: '',
  message: ''
})
const errors = ref({})

function validateForm() {
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'Le nom est requis.'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'L\'email est requis.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'L\'email est invalide.'
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Le message est requis.'
  }

  return Object.keys(errors.value).length === 0
}

function sendEmail() {
  if (!validateForm()) return

  status.value = 'Message envoyé avec succès !'
  /* emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.value,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        status.value = 'Message envoyé avec succès !'
        formData.value = { name: '', email: '', message: '' }
      })
      .catch(() => {
        status.value = "Une erreur s'est produite. Essayez encore."
      })
  */
}
</script>