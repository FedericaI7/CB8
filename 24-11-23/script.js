console.log("ciao");

const cE = (element) => document.createElement(element);

// ------------NAV------------------

const createNav = () => {
  const navWrapper = cE("nav");
  const divNavContainer = cE("div");
  const img = cE("img");
  const divCentral = cE("div");
  const centralNav = ["Home", "About", "Shop", "Pages", "Contact"];

  for (let i = 0; i < centralNav.length; i++) {
    const aLink = cE("a");
    aLink.href = "#";
    aLink.textContent = centralNav[i];
    divCentral.appendChild(aLink);
  }

  const divRight = cE("div");
  const rightNav = ["Sign Up", "Order Now"];
  for (let i = 0; i < rightNav.length; i++) {
    const aLink = cE("a");
    aLink.href = "#";
    aLink.textContent = rightNav[i];
    if (rightNav[i] == "Order Now") {
      aLink.className = "btn-nav";
    }
    divRight.appendChild(aLink);
  }

  divNavContainer.className = "nav--container";
  img.src = "/assets/img/logoipsum-293.svg";
  img.alt = "logo";
  divCentral.className = "central-nav";
  divRight.className = "right-nav";

  navWrapper.appendChild(divNavContainer);
  divNavContainer.append(img, divCentral, divRight);

  return navWrapper;
};

// ------------------MAIN-------------------------

const createMain = () => {
  const mainWrapper = cE("main");
  const mainContainer = cE("div");
  const divImg = cE("div");
  const imgEl = cE("img");
  const divText = cE("div");
  const h1El = cE("h1");
  const pEl = cE("p");
  const aLink = cE("a");

  mainContainer.className = "main--container";
  divImg.className = "main-img";
  imgEl.src = "/assets/img/undraw_different_love_a-3-rg.svg";
  imgEl.alt = "Illustration";
  divText.className = "main-text";
  h1El.textContent = "Thoughtful Gifting Made Easy";
  pEl.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nobis sint voluptatibus nulla minima modiconsectetur omnis.";
  aLink.className = "btn-main";
  aLink.href = "#";
  aLink.textContent = "GET STARTED";

  mainWrapper.appendChild(mainContainer);
  mainContainer.append(divImg, divText);
  divImg.appendChild(imgEl);
  divText.append(h1El, pEl, aLink);

  return mainWrapper;
};

// -----------FIRST SECTION--------------

const dataFirstSection = [
  {
    img: "./assets/img/undraw_christmas_stocking_wux9.svg",
    alt: "Icon",
    testoH3: "Lorem Ipsum",
    testoP:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo neque hic tempore porro et providentasperiores autem labore, unde id harum!",
  },
  {
    img: "./assets/img/undraw_santa_claus_re_sv6b.svg",
    alt: "Icon",
    testoH3: "Lorem Ipsum",
    testoP:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo neque hic tempore porro et providentasperiores autem labore, unde id harum!",
  },
  {
    img: "./assets/img/undraw_social_tree_-1-_y-9-wa.svg",
    alt: "Icon",
    testoH3: "Lorem Ipsum",
    testoP:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo neque hic tempore porro et providentasperiores autem labore, unde id harum!",
  },
];

const createFirstSection = () => {
  const sectionWrapper = cE("section");
  const divContainer = cE("div");
  const divText = cE("div");
  const h2El = cE("h2");
  const pEl = cE("p");
  const divIconContainer = cE("div");

  for (let i = 0; i < dataFirstSection.length; i++) {
    const divIconSection = cE("div");
    divIconSection.className = "icon-section";
    const imgEl = cE("img");
    imgEl.src = dataFirstSection[i].img;
    const h3El = cE("h3");
    h3El.textContent = dataFirstSection[i].testoH3;
    const pEl = cE("p");
    pEl.textContent = dataFirstSection[i].testoP;
    divIconSection.append(imgEl, h3El, pEl);
    divIconContainer.appendChild(divIconSection);
  }

  divContainer.className = "firstSection--container";
  h2El.textContent = "Thoughtful Gifting Made Easy";
  pEl.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  divText.className = "firstSection-text";
  divIconContainer.className = "icon-section-container";

  sectionWrapper.appendChild(divContainer);
  divText.append(h2El, pEl);
  divContainer.append(divText, divIconContainer);
  // divIconContainer.appendChild(divIconSection);

  return sectionWrapper;
};

// ------------SECOND SECTION CALL TO ACTION---------------

const createSecondSection = () => {
  const sectionWrapper = cE("section");
  const divContainer = cE("div");
  const divText = cE("div");
  const h2El = cE("h2");
  const pEl = cE("p");
  const aLink = cE("a");
  const divImg = cE("div");
  const imgEl = cE("img");

  divContainer.className = "second-sect--container main--container";
  divText.className = "second-sect-text main-text";
  h2El.textContent = "Corporate Gifting";
  pEl.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nobis sint voluptatibus nulla minima modi consectetur omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid deleniti fuga, neque tempora quia saepe ea architecto facilis rem aut, sequi, facere maxime numquam! A impedit quibusdam veritatis harum?";
  aLink.href = "#";
  aLink.className = "btn-main";
  aLink.textContent = "READ MORE";
  divImg.className = "second-sect-img main-img";
  imgEl.src = "/assets/img/undraw_santa_visit_re_oiwr.svg";

  sectionWrapper.appendChild(divContainer);
  divContainer.append(divText, divImg);
  divText.append(h2El, pEl, aLink);
  divImg.appendChild(imgEl);

  return sectionWrapper;
};

// -------THIRD SECTION CLIENTS------

const createThirdSection = () => {
  const sectionWrapper = cE("section");
  const divContainer = cE("div");
  const pEl = cE("p");

  divContainer.className = "third-sect--container";
  pEl.textContent = "We're trusted by clients.";

  sectionWrapper.appendChild(divContainer);
  divContainer.appendChild(pEl);

  return sectionWrapper;
};

// -------- 4 SECTION ------------
const createFourthSection = () => {
  const sectionWrapper = cE("section");
  const divContainer = cE("div");
  const divImg = cE("div");
  const imgEl = cE("img");
  const divText = cE("div");
  const h2El = cE("h2");
  const pEl = cE("p");
  const aLink = cE("a");

  divContainer.className = "main--container";
  divImg.className = "main-img";
  imgEl.src = "/assets/img/undraw_gift_re_qr17.svg";
  imgEl.alt = "illustration";
  divText.className = "main-text";
  h2El.textContent = "Personal Gifting";
  pEl.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nobis sint voluptatibus nulla minima modi consectetur omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error similique exercitationem saepe totam quod voluptates, veritatis quam molestias odio repudiandae dicta harum atque modi. Repudiandae iste esse quaerat amet natus.";
  aLink.href = "#";
  aLink.textContent = "LEARN MORE";
  aLink.className = "btn-main";

  sectionWrapper.appendChild(divContainer);
  divContainer.append(divImg, divText);
  divImg.appendChild(imgEl);
  divText.append(h2El, pEl, aLink);

  return sectionWrapper;
};

// ---------------BLOG-----------------

const dataBlog = [
  {
    img: "./assets/img/joshua-lam-I2f_r0jj73U-unsplash.jpg",
    alt: "icon",
    h3Text: "Lorem Ipsum",
    pText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo neque hic tempore porro et provident asperiores autem labore, unde id harum!",
    aText: "Read More",
  },
  {
    img: "./assets/img/kira-auf-der-heide-BkigsnKJK34-unsplash.jpg",
    alt: "icon",
    h3Text: "Lorem Ipsum",
    pText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo neque hic tempore porro et provident asperiores autem labore, unde id harum!",
    aText: "Read More",
  },
  {
    img: "./assets/img/kira-auf-der-heide-fV4-DdSdcpI-unsplash.jpg",
    alt: "icon",
    h3Text: "Lorem Ipsum",
    pText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo neque hic tempore porro et provident asperiores autem labore, unde id harum!",
    aText: "Read More",
  },
];

const createBlog = () => {
  const sectionWrapper = cE("section");
  const divContainer = cE("div");
  const divBlogText = cE("div");
  const h2El = cE("h2");
  const pEl = cE("p");

  const divBlogContainer = cE("div");
  for (let i = 0; i < dataBlog.length; i++) {
    const articleEl = cE("article");
    articleEl.className = "blog-picture icon-section";
    const imgEl = cE("img");
    imgEl.src = dataBlog[i].img;
    imgEl.alt = dataBlog[i].alt;
    const h3El = cE("h3");
    h3El.textContent = dataBlog[i].h3Text;
    const pEl = cE("p");
    pEl.textContent = dataBlog[i].pText;
    const aLink = cE("a");
    aLink.href = "#";
    aLink.className = "btn-nav";
    aLink.textContent = dataBlog[i].aText;

    divBlogContainer.appendChild(articleEl);
    articleEl.append(imgEl, h3El, pEl, aLink);
  }

  divContainer.className = "blog-container firstSection--container";
  divBlogText.className = "blog-text firstSection-text";
  h2El.textContent = "Thoughtful Gifting Made Easy";
  pEl.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  divBlogContainer.className = "blog-picture-container icon-section-container";

  sectionWrapper.appendChild(divContainer);
  divContainer.append(divBlogText, divBlogContainer);
  divBlogText.append(h2El, pEl);

  return sectionWrapper;
};

// --------------FORM--------------

const inputInfo = [
  { type: "text", id: "fname", name: "fname", placeholder: "First Name" },
  { type: "text", id: "lastname", name: "lastname", placeholder: "Last Name" },
  { type: "email", id: "email", name: "email", placeholder: "Email" },
  { type: "text", id: "subject", name: "subject", placeholder: "Subject" },
];

const createForm = () => {
  const formContainer = cE("div");
  const formText = cE("div");
  const h4El = cE("h4");
  const pEl = cE("p");
  const formWrapper = cE("form");
  const divContainer = cE("div");
  const divTextArea = cE("div");
  const textArea = cE("textarea");
  const buttonEl = cE("button");
  buttonEl.type = "submit";
  buttonEl.textContent = "SUBMIT";
  const lineInput1 = cE("div");

  for (let i = 0; i < 2; i++) {
    const inputEl = cE("input");
    const labelEl = cE("label");

    const currentInputInfo = inputInfo[i];

    inputEl.type = currentInputInfo.type;
    inputEl.id = currentInputInfo.id;
    inputEl.name = currentInputInfo.name;
    inputEl.setAttribute("placeholder", currentInputInfo.placeholder);

    labelEl.setAttribute("for", currentInputInfo.id);

    lineInput1.appendChild(inputEl);
    lineInput1.appendChild(labelEl);
  }

  const lineInput2 = cE("div");
  lineInput2.className = "line-input";
  for (let i = 2; i < inputInfo.length; i++) {
    const inputEl = cE("input");
    const labelEl = cE("label");

    const currentInputInfo = inputInfo[i];

    inputEl.type = currentInputInfo.type;
    inputEl.id = currentInputInfo.id;
    inputEl.name = currentInputInfo.name;
    inputEl.setAttribute("placeholder", currentInputInfo.placeholder);

    labelEl.setAttribute("for", currentInputInfo.id);

    lineInput2.appendChild(inputEl);
    lineInput2.appendChild(labelEl);
  }

  formContainer.className = "form--container";
  formText.className = "form-text";
  h4El.textContent = "Contact Us";
  pEl.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam qui alias laborum debitis, itaque magnam aspernatur corrupti asperiores beatae quos? Vel autem mollitia unde quas praesentium alias maiores recusandae.";
  divContainer.className = "form-form";
  lineInput1.className = "line-input";

  divContainer.append(lineInput1, lineInput2, divTextArea, buttonEl);
  divTextArea.appendChild(textArea);
  formText.appendChild(h4El);
  formText.appendChild(pEl);
  formContainer.append(formText, formWrapper);
  formWrapper.appendChild(divContainer);

  return formContainer;
};

// -----------------FOOTER--------------------

const dataFooter = [
  {
    id: 1,
    img: "/assets/img/logoipsum-293.svg",
    ptext:
      "Lorem ipsum dolor sed ducimus fugit sunt, modi distinctio porro quos.",
  },
  {
    id: 2,
    h3Text: "Company",
    a1: "Blog",
    a2: "About us",
    a3: "Download",
    a4: "We're hiring",
  },
  {
    id: 3,
    h3Text: "Partner",
    a1: "Sell on Gifting",
    a2: "Corporate Gifting",
    a3: "Press",
  },
  {
    id: 4,
    h3Text: "Help",
    a1: "Contact Us",
    a2: "Shipping",
    a3: "FAQ",
  },
  {
    id: 5,
    h3Text: "Newsletter",
    pText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit modi repudiandae dicta neque",
    social1: "bi bi-facebook",
    social2: "bi bi-whatsapp",
    social3: "bi bi-instagram",
  },
];

const createFooter = () => {
  const footerWrapper = cE("footer");
  const divContainer = cE("div");

  for (let i = 0; i < dataFooter.length; i++) {
    const footerBox = cE("div");
    footerBox.className = "footer-box";
    let aLink;

    if (dataFooter[i].id === 1) {
      const imgEl = cE("img");
      imgEl.src = dataFooter[i].img;
      const pEl = cE("p");
      pEl.textContent =
        "Lorem ipsum dolor sed ducimus fugit sunt, modi distinctio porro quos.";
      footerBox.append(imgEl, pEl);
      divContainer.appendChild(footerBox);
    }
    if (dataFooter[i].id === 2) {
      const h3El = cE("h3");
      h3El.textContent = dataFooter[i].h3Text;
      const arrLink = [];
      for (let j = 0; j <= 3; j++) {
        aLink = cE("a");
        aLink.href = "#";
        aLink.textContent = dataFooter[i][`a${j + 1}`];
        arrLink.push(aLink);
      }
      footerBox.append(h3El, ...arrLink);
      divContainer.appendChild(footerBox);
    }
    if (dataFooter[i].id === 3) {
      const h3El = cE("h3");
      h3El.textContent = dataFooter[i].h3Text;
      const arrLink = [];
      for (let j = 0; j <= 2; j++) {
        aLink = cE("a");
        aLink.href = "#";
        aLink.textContent = dataFooter[i][`a${j + 1}`];
        arrLink.push(aLink);
      }
      footerBox.append(h3El, ...arrLink);
      divContainer.appendChild(footerBox);
    }
    if (dataFooter[i].id === 4) {
      const h3El = cE("h3");
      h3El.textContent = dataFooter[i].h3Text;
      const arrLink = [];
      for (let j = 0; j <= 2; j++) {
        aLink = cE("a");
        aLink.href = "#";
        aLink.textContent = dataFooter[i][`a${j + 1}`];
        arrLink.push(aLink);
      }
      footerBox.append(h3El, ...arrLink);
      divContainer.appendChild(footerBox);
    }
    if (dataFooter[i].id === 5) {
      const h3El = cE("h3");
      h3El.textContent = dataFooter[i].h3Text;
      const pEl = cE("p");
      pEl.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit modi repudiandae dicta neque";
      const hrEl = cE("hr");
      const divSocials = cE("div");
      divSocials.className = "socials";
      for (let j = 0; j <= 2; j++) {
        aLink = cE("a");
        aLink.href = "#";
        const iLink = cE("i");
        iLink.className = dataFooter[i][`social${j + 1}`];
        aLink.appendChild(iLink);
        divSocials.appendChild(aLink);
      }
      footerBox.append(h3El, pEl, hrEl, divSocials);
      divContainer.appendChild(footerBox);
    }
  }

  footerWrapper.appendChild(divContainer);
  divContainer.className = "footer--container";

  return footerWrapper;
};

document.body.append(
  createNav(),
  createMain(),
  createFirstSection(),
  createSecondSection(),
  createThirdSection(),
  createFourthSection(),
  createBlog(),
  createForm(),
  createFooter()
);
