const getHtml = ({
  title = "",
  twitter = "",
  presenter = "",
  eventId = 4,
  eventName = "",
  date = "",
  time = ""
}) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Vue Hyderabad</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    <style>
      .card {
        width: 1200px;
        height: 670px;
        background-color: #f0fff4;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23caead2' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
      .image {
        width: 30%;
      }
      .image img {
        position: absolute;
        height: 100%;
        left: -335px;
        max-width: unset;
      }
      .vuehyd-logo {
        position: absolute;
        right: 16px;
        bottom: 16px;
      }
    </style>
  </head>
  <body>
    <div class="card border-t-8 flex" style="border-color: #41B883;">
      <div class="image">
        <img
          class="charminar"
          src="http://hyd.vue.community/charminar.svg"
        />
      </div>
      <div class="h-full mx-auto py-16 flex flex-col justify-around">
        <div class="flex flex-col text-center items-center">
          <img
            class="w-48 h-48 rounded-full border-2 border-white"
            src="https://avatars.io/twitter/${twitter}"
            alt="avatar of the presenter"
          />
          <h1 class="px-8 text-5xl font-bold text-gray-900">
            ${title}
          </h1>
          <h2 class="text-3xl text-green-900">${presenter}</h2>
        </div>
        <div class="flex flex-col text-center items-center mt-8">
          <div class="font-bold text-4xl text-gray-900">
            <span>
              Vue Hyderabad #${eventId}
            </span>
            <span class="text-green-700">▪</span>
            <span>
              ${eventName}
            </span>
          </div>
          <div class="text-green-900">
            <p class="text-2xl">${date}</p>
            <p class="text-2xl">${time}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="vuehyd-logo">
      <img
        class="w-32 h-16"
        src="https://res.cloudinary.com/djeivq7td/image/upload/v1579511174/vuehyd-logo.png"
        alt="vh"
      />
    </div>
  </body>
</html>

  `;
};

module.exports = getHtml;
