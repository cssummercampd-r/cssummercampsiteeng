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
              > About us</a>
            <router-link
              to="/student"
              class="  bg-pink-400 py-2 px-2 rounded-full font-bold text-xl text-white hover:text-yellow-400"
              >Student Portfolios</router-link
            >
            <!-- <router-link :to="/studentwork" class="text-white font-semibold text-lg hover:text-blue-400"> Student Portfolios</router-link> -->
            <a
              href="#contact"
              class=" bg-pink-400 py-2 px-2 rounded-full font-bold text-white text-xl hover:text-yellow-400"
            >
              Contact Us
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
              Computer <br />
              Science <br />
              Summer Camp<br />
              For<br />
              <span class="text-pink-400">Girls 2021 </span>
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
              About Us
            </h1>
            <p class="text-white font-semibold">
              When I immigrated to the United States from the Dominican Republic, I had no idea of the opportunites I would have. In high school, an after-school program for underprivileged young adults brought computer science education into my life. Today, a college graduate with a degree in computer science, I can return the favor to my community by bringing that same education to underprivileged girls in the Dominican Republic. In this 5-week summer program, girls learned to create websites using HTML and CSS. They also learned to be agents of change in their communities and how to do so through this new skill. All this work was possible thanks to my parents Justo Peña and Mercedes Torrez, my dearest friends and colleauges Isabel Gomez and Mikael Moise, The National Evangelical Univeristy in D.R and of course our donors.   </p>
          </div>
        </div>
        <div
          class="col-span-none sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6  h-full px-16 py-6 "
          style="background-color: #D62F44"
        >
          <div class="font-semibold text-white">
            <h1 class="text-white font-semibold text-6xl mb-7">
              Our Donors
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
                <li>14 other anonymous donors</li>
              </ul>
            </div>
            <p class="text-2xl text-yellow-400">Thank you!</p>
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
            >View More Here</router-link
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
                Contact Us!
              </h1>
              <p class="text-black">
                Complete the following form to send us a message!
              </p>
            </div>
            <div class="m-7">
              <form
                action="https://getform.io/f/d6470895-f3eb-478f-8e59-3440810ad7e6"
                method="POST"
                id="form"
              >
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
                    >Complete Name</label
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
                    >Email address</label
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
                    >Your message</label
                  >
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Enter your note"
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
                    Send Message!
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
