<template>
  <div id="home">
    <!-- Header Section -->
    <section >

    <div class="px-20 relative w-full bg-cover" :style="{'background-image': 'url(' + require('/src/assets/girlsy.png') + ')'}">
      <header>
        <div class="flex justify-between items-center  ">
          <div>
            <!-- <img class="logo" src="./assets/logo.png" /> -->
          </div>
          <div
            class=" justify-center space-x-4 hidden sm:block my-5 ml-20"
          >
            <!-- <router-link :to="{ name: 'StudentWork' }">About</router-link> -->
            <!-- <router-view></router-view> -->
            <a
              href="#aboutus"
              class="bg-pink-400 py-2 px-2 rounded-full font-bold text-xl text-white hover:text-yellow-400"
              >Sobre Nosotros</a
            >
            <router-link
              to="/student"
              class="  bg-pink-400 py-2 px-2 rounded-full font-bold text-xl text-white hover:text-yellow-400"
              >Portafolios De Estudiantes</router-link
            >
            <!-- <router-link :to="/studentwork" class="text-white font-semibold text-lg hover:text-blue-400"> Student Portfolios</router-link> -->
            <a
              href="#contact"
              class=" bg-pink-400 py-2 px-2 rounded-full font-bold text-white text-xl hover:text-yellow-400"
            >
              Contactenos
            </a>
          </div>
          <div class="flex  hidden sm:block">

          </div>
        </div>
      </header>
      <div class="grid grid-cols-1 ">
        <div
          class="col-span-1 sm:col-span-10 md:col-span-10 lg:col-span-10 xxl:col-span-9 "
        >
          <div class="">
            <h1 class="text-9xl text-white  font-bold ">
              Campamento <br />
              de Verano <br />
              de  Informática<br />
              para<br />
              <span class="text-pink-400">Chicas 2021 </span>
              <span style="color: #002962"> D</span>.<span
                style="color: #D62F44"
                >R</span
              >.
            </h1>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- About us and Our Donors -->
    <section class="h-full bg-yellow-300 text-center">
      <div class="grid grid-cols-12 gap-0">
        <div
          class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 h-full px-16 py-6"
          style="background-color: #002962"
        >
          <div>
            <h1 class="text-white font-semibold text-7xl mb-3" id="aboutus">
              Sobre Nosotros
            </h1>
            <p class="text-white font-semibold">
              Cuando emigré de República Dominicana a Estados Unidos, no tenía
              idea de las oportunidades que tendría. En la escuela secundaria,
              un programa extracurricular para niños desfavorecidos trajo la
              educación en ciencias de la computación a mi vida. Hoy, graduada
              de la universidad con un título en informática, puedo devolver el
              favor a mi comunidad al llevar esa misma educación a las niñas
              desfavorecidas en la República Dominicana. En este programa de
              verano de 5 semanas, las niñas aprenden a crear sitios web usando
              HTML y CSS. También aprenden a ser agentes de cambio en sus
              comunidades y están capacitados para hacerlo a través de esta
              nueva habilidad. Todo este trabajo es posible gracias a mis padres
              Justo Peña y Mercedes Torrez, mis más queridos amigos y colegas de
              la universidad Isabel Gómez y Mikael Moise, la Universidad
              Nacional Evangélica en R.D., y por supuesto nuestros donantes.
            </p>
          </div>
        </div>
        <div
          class="col-span-none sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6  h-full px-16 py-6 "
          style="background-color: #D62F44"
        >
          <div class="font-semibold text-white">
            <h1 class="text-white font-semibold text-6xl mb-7">
              Nuestros Donantes
            </h1>
            <div style="float: left; width: 33%;">
              <ul>
                <li>Albert Kim</li>
                <li>Alexis Kilayko</li>
                <li>Alina Siminiouk</li>
                <li>Annika Miller</li>
                <li>Mikael Moise</li>
                <li>Dennique Khanns</li>
                <li>Din Tolbert</li>
                <li>Emely Ruiz</li>
                <li>Erin Walsh</li>
                <li>George Reilly</li>
              </ul>
            </div>
            <div style="float: left; width: 33%;">
              <ul>
                <li>Gwen Spencer</li>
                <li>Hannah Vogel</li>
                <li>Jamaya Smith</li>
                <li>Jessica Lee</li>
                <li>Lauren Guerrant</li>
                <li>Lindsay Swanson</li>
                <li>Lisselot Martinez</li>
                <li>Madeline Pfaff</li>
                <li>Madineh Sarvestani</li>
                <li>Madison Bates</li>
              </ul>
            </div>
            <div style="float: right; width: 33%;">
              <ul>
                <li>Michael Lewis</li>
                <li>Miles Ott</li>
                <li>Patricia Stallings</li>
                <li>Peter de Villiers</li>
                <li>Shreya Malena-Sannon</li>
                <li>Sushmitha Ram</li>
                <li>Suzanne Emerson</li>
                <li>Whitney Wilde</li>
                <li>14 otros donantes anónimos</li>
              </ul>
            </div>
            <p class="text-2xl text-yellow-400">¡Les agradecemos!</p>
          </div>
        </div>
      </div>
    </section>
    <section class=" flex justify-center py-2">
      <div>
        <carousel>
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
      </div>


    </section>
    <section class="justify-center flex py-2">
      <button class=" bg-red-400 text-white font-bold py-2 px-2 rounded-lg text-sm  shadow-xl"
          >
          <router-link
            to="/gallery"
            class="  font-bold text-xl text-white hover:text-yellow-400"
            >Ver Más Aquí</router-link
          >
        </button>
  </section>

    <!-- Contact Us -->
    <section id="contact">
      <div class="flex items-center bg-pink-400 ">
        <div class="container mx-auto ">
          <div class="m-14 my-14 bg-white p-5 rounded-md shadow-2xl ">
            <div class="text-center">
              <h1
                class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
              >
                ¡Contactenos!
              </h1>
              <p class="text-black">
                Complete el siguiente formulario para enviarnos un mensaje.
              </p>
            </div>
            <div class="m-7">
              <form
                action="https://getform.io/f/d6470895-f3eb-478f-8e59-3440810ad7e6"
                method="POST"
                id="form"
              >
                <!-- <input type="hidden" name="apikey" value="ad487da6-6a17-4490-9501-ec867a7a4c03"> -->
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from CS Summer DR"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  id=""
                  style="display: none;"
                />

                <div class="mb-6">
                  <label
                    for="name"
                    class="font-semibold text-lg block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Nombre completo</label
                  >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="font-semibold block text-lg mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Dirección de correo electrónico</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="message"
                    class="font-semibold text-lg block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Tu mensaje</label
                  >
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="¡Envíanos una nota!"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                  ></textarea>
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    class="w-full text-lg font-bold px-3 py-4 text-white bg-indigo-500 rounded-md focus:outline-none"
                    style="background-color: #7dd959"
                  >
                    ¡Enviar mensaje!
                  </button>
                </div>
                <p class="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Footer -->
    <section class="h-full bg-gray-800">
      <div class="py-6 px-16 flex justify-between">
        <div>
          <img class="footerlogo" src="../assets/logo.png" />
        </div>
      </div>
      <div class="border-t-2 mx-10 border-gray-500"></div>
      <div class="py-4 py-6 px-16 flex justify-between">
        <div>
          <h1 class="font-semibold text-white text-sm">CSSUMMERDR @ 2021</h1>
        </div>
        <div>
          <a href="#" class="flex space-x-2 text-white hover:text-yellow-400">
            <p class="font-semibold  text-sm">GO TOP</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6  -mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide';

export default {
    data(){
        return {
            slides: [
                'https://i.imgur.com/HmCfXfM.jpg',
                'https://i.imgur.com/IULJzQA.jpg',
                'https://i.imgur.com/u7oZt9e.jpg',
                'https://i.imgur.com/VW8IgGs.jpg'
            ]
        }
    },
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}


</script>

<style>

.carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
      border-radius: 50%;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        font-weight: bold;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }



.footerlogo {
  height: 5rem;
  width: 5rem;
}

.logo {
  height: 30rem;
  width: 30rem;
  float: right;
}

.grouplogo {
  height: 10rem;
  width: 10rem;
}
</style>
