document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbLinks = document.querySelectorAll('#breadcrumb-vertical .breadcrumb-item');
  const contentArea = document.getElementById('content-area');

  // function to update content
  function updateContent(contentId) {
    // Example content changes based on data-content
    let htmlContent = '';
    if (contentId === 'forone') {
      htmlContent = `
        <h4 style="text-align: center;">As a<span style="text-decoration: underline; font-weight: 600;"> cat rescuer</span>, you are at the forefront of trapping, neutering/spaying, and returning cats. <span style="font-weight: 700;">YOU ARE OUR HERO!</span></h4>
         <div class="container mt-4">
         <div class="row">
         <!-- first column -->
         <div class="col-md-10 mx-auto">
         <h6 style="text-align: center;">STEPS TO BE TAKEN</h6>
         <ul style="margin-top: 24px;">
         <li class="body-normal" style="margin-top: 18px;">1. Register on Trapperaid and pass the verification process.</li>
         <li class="body-normal" style="margin-top: 18px;">2. Choose your role(s) - trapper, trapper helper, host, and/or driver.</li>
         <li class="body-normal" style="margin-top: 18px;">3. Provide more information about your cat colony, holding space, or the transportation you offer.</li>
         <li class="body-normal" style="margin-top: 18px;">4. Offer or request services, raise funds for your colony cats, book spay/neuter appointments, and pay at the veterinary clinic using your funds.</li>
        </ul>
       </div>
       <!-- second column -->
      <div class="col-md-8 mx-auto" style="margin-top: 0px;">
       <img src="images/for-cat-rescuers-min.jpg" alt="TrapperAid platform two prototype pages" class="responsive-img" loading="lazy">
      </div>
    </div>
   </div>
      `;
    } else if (contentId === 'fortwo') {
      htmlContent = `
       <h4 style="text-align: center;">As a<span style="text-decoration: underline; font-weight: 600;"> shelter/rescue</span> you have limited resources and space. You need a help and assistance to make your mission work. </h4>
         <div class="container mt-4">
         <div class="row">
           <!-- First Column -->
        <div class="col-md-10 mx-auto">
        <h6 style="text-align: center">STEPS TO BE TAKEN</h6>
        <ul style="margin-top: 24px;">
        <li class="body-normal" style="margin-top: 18px;">1. We will register your shelter/rescue on the platform and guide you on how to list resources, schedule services, and manage volunteers.</li>
        <li class="body-normal" style="margin-top: 18px;">2. We will provide you training sessions on using the platform for coordination and data entry.</li>
        <li class="body-normal" style="margin-top: 18px;">3. Start using our services! Raise funds, book a holding place or a transport, schedule appointments, and pay at the veterinary clinics for spay/neuter services and unexpected medial issues.</li>
      </ul>
    </div>
   <!-- second column -->
    <div class="col-md-8 mx-auto">
      <img src="images/for-rescues-min.jpg" alt="TrapperAid platform two prototype pages" class="responsive-img" loading="lazy">
    </div>
  </div>
</div>        
      `;
    } else if (contentId === 'forthree') {
      htmlContent = `
         <h4 style="text-align: center">As a<span style="text-decoration: underline; font-weight: 600;"> local government</span>, you will get data that will help assist in allocating funds and addressing the cat overpopulation crisis in your jurisdiction. </h4>
         <div class="container mt-4">
         <div class="row">
         <!-- first column -->
         <div class="col-md-10 mx-auto">
         <h6 style="text-align: center;">STEPS TO BE TAKEN</h6>
         <ul style="margin-top: 24px;">
         <li class="body-normal" style="margin-top: 18px;">1. We will register city and public health officials on the platform and provide access to dashboards, data visualization tools, and reporting features. </li>
         <li class="body-normal" style="margin-top: 18px;">2. We will train your officials on interpreting public health data, managing alerts, coordinating  with TNR providers, and using resource allocation tools. </li>
         <li class="body-normal" style="margin-top: 18px;">3. We will start collecting and analyzing health-related data to monitor disease outbreaks, optimize resource distribution, and guide public health measures to enhance public health and safety outcomes. </li>
        </ul>
       </div>
       <!-- second column -->
      <div class="col-md-8 mx-auto">
       <img src="images/for-local-governments-min.jpg" alt="TrapperAid platform two prototype pages" class="responsive-img" loading="lazy">
      </div>
    </div>
   </div>     
      `;
    } else if (contentId === 'forfour') {
      htmlContent = `
     <h4 style="text-align: center">As a<span style="text-decoration: underline; font-weight: 600;"> veterinary clinic</span> you will get data that will help assist in optimizing scheduling and resources and addressing the cat overpopulation crisis in your jurisdiction.</h4>
         <div class="container mt-4">
         <div class="row">
           <!-- First Column -->
        <div class="col-md-10 mx-auto">
        <h6 style="text-align: center">STEPS TO BE TAKEN</h6>
        <ul style="margin-top: 24px;">
        <li class="body-normal" style="margin-top: 18px;">1. We will register your veterinary clinic on the platform and help you list services, set pricing, and understand platform incentives.</li>
        <li class="body-normal" style="margin-top: 18px;">2. We will provide sessions to show your vets how to manage appointments, integrate our platform with existing systems, and report data.</li>
        <li class="body-normal" style="margin-top: 18px;">3. We will collect data on TNR services provided by your clinic to track your impact and prove that you qualify for incentives.</li>
      </ul>
    </div>
   <!-- second column -->
    <div class="col-md-8 mx-auto">
      <img src="images/for-veterinary-clinics-min.jpg" alt="TrapperAid platform two prototype pages" class="responsive-img" loading="lazy">
    </div>
  </div>
</div>        
      `;
    } else if (contentId === 'forfive') {
      htmlContent = `
        <h4 style="text-align: center">As a<span style="text-decoration: underline; font-weight: 600;"> larger organization</span> you will get data  get data that will help you allocate your funds effectively and address the cat overpopulation crisis in your jurisdiction.</h4>
         <div class="container mt-4">
         <div class="row">
           <!-- First Column -->
        <div class="col-md-10 mx-auto">
        <h6 style="text-align: center">STEPS TO BE TAKEN</h6>
        <ul style="margin-top: 24px;">
        <li class="body-normal" style="margin-top: 18px;">1. We will register your organization on the platform and integrate your management systems into ours.</li>
        <li class="body-normal" style="margin-top: 18px;">2. We will provide you training on data integration and coordination tools.</li>
        <li class="body-normal" style="margin-top: 18px;">3. We will monitor your data and adjust strategies as needed making sure your information is secure, easily accessible to you, and well-maintained.</li>
      </ul>
    </div>
   <!-- second column -->
    <div class="col-md-8 mx-auto">
      <img src="images/for-larger-organizations-min.jpg" alt="TrapperAid platform two prototype pages" class="responsive-img" loading="lazy">
    </div>
  </div>
</div>        
      `;      
    }
    contentArea.innerHTML = htmlContent;
  }

// Add event listeners to breadcrumb links
breadcrumbLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Remove active class from all breadcrumb links
      breadcrumbLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the clicked link
      this.classList.add('active');

      // Update content based on data-content attribute
      const contentId = this.getAttribute('data-content');
      updateContent(contentId);
    });
  });

  // set default content by simulating a click on the first breadcrumb item
  updateContent('forone');
});