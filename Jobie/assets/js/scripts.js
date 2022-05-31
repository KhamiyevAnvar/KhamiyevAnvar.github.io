$(function () {
  const sidebar = $('#sidebar');
  const mainJobie = $('.main-jobie');

  $("#nav-but").click(function () {
    sidebar.toggleClass('sidebar-small');
    mainJobie.toggleClass('main-jobie2');
    $(this).toggleClass('active-nav-desk-but');
  })

  // featured carousel
  $('.featured-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 1000,
    autoplay: false,
    dots: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      991: {
        items: 4.5
      }
    }
  })

  // selectpicker
  $('.location-selectpicker').selectpicker();

  $('.sort-selectpicker').selectpicker();


  // edit app
  var editButton = $(".edit-button");
  var appType = $(".appType");
  var editAppItem = $(".editAppItem");
  var removeAppItem = $(".removeAppItem");
  var dashboardContainer = $(".dashboard-container")
  var EditREmove = $(".editRemove");
  appType.click(function () {
    $(this).children().blur();
  })

  editButton.click(function (e) {
    $(this).siblings(".editRemove").toggleClass("active-editRemove");
    e.stopPropagation();
  })

  EditREmove.click(function (e) {
    e.stopPropagation();
  })

  dashboardContainer.click(function (e) {
    editButton.siblings(".editRemove").removeClass("active-editRemove");
  })

  editAppItem.click(function () {
    let thisInput = $(this).parents(".appStatus").siblings(".appType").children();
    thisInput.focus();
    thisInput.keypress(function () {
      $(this).attr("value", " ");
    });

    thisInput.change(function () {
      alert($(this).val().toUpperCase());
    });
  })

  removeAppItem.click(function () {
    $(this).parents("tr").remove();
  })

  //pagination
  var paginationBlock = $(".jobie-pagination-body li");
  paginationBlock.click(function () {

    $(this).addClass("active").siblings().removeClass("active");

  })

  // gridView
  var twoGridButton = $(".viewList1");
  var fourGridButton = $(".viewList2");
  var companyBlock = $("#companyCardBox");
  var jobieCardBlock = $("#jobieCardBox");

  twoGridButton.click(function () {
    jobieCardBlock.find(".col-md-4").removeClass("col-md-4").addClass("col-md-6");
    companyBlock.find(".col-md-3").removeClass("col-md-3").addClass("col-md-6");
    $(this).addClass("active").siblings().removeClass("active");
  })
  fourGridButton.click(function () {
    jobieCardBlock.find(".col-md-6").removeClass("col-md-6").addClass("col-md-4");
    companyBlock.find(".col-md-6").removeClass("col-md-6").addClass("col-md-3");
    $(this).addClass("active").siblings().removeClass("active");
  })

  // recommendedJobs carousel
  $('.recommendedJobs').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    smartSpeed: 500,
    autoplay: false,
    dots: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      991: {
        items: 2.5
      }
    }
  })

  //profil show hide

  const showHideBut = $(".showHide");
  var state = false;
  showHideBut.click(
    function () {
      if (state) {
        $(this).siblings("input").attr("type", "password");
        $(this).text("show");
        state = false;
      } else {
        $(this).siblings("input").attr("type", "text");
        $(this).text("hide");
        state = true;
      }
    }
  )

  //contact selectpicker

  $('.country-selectpicker').selectpicker();
  $('.city-selectpicker').selectpicker();

  // skill range
  var rangeValue = $(".rangeValue");
  var rangeInput = $(".rangeInput");

  $(document).on('mousemove', '.rangeInput', function () {
    $(this).parents(".skillsFormGroup").find(".rangeValue").text($(this).val());

    var x = $(this).val();
    var color = {
      background: 'linear-gradient(90deg, #40189D ' + x + '%, #EEEEEE ' + x + '%)'
    };

    $(this).css(color);

  })

  window.onload = () => {
    for (skills of rangeInput) {
      var skillsVal = skills.value;
      skills.style.background = 'linear-gradient(90deg, #40189D ' + skillsVal + '%, #EEEEEE ' + skillsVal + '%)';
    }
  };

  // companies #companiesCloseButton
  var companiesCloseButton = $(".companiesCloseButton");
  var companiesContent = $("#companies-content");
  var cLoneCompanyCard = companiesContent.find(".companyDetailsCard").clone();


  $(document).on('click', '.companiesCloseButton', function () {
    $(this).parents(".companyDetailsCard").remove();
    companiesContent.find(".col-lg-9").removeClass("col-lg-9").addClass("col-lg-12");
  });

  var companyCard = $(".companyCard");

  companyCard.click(function () {
    companiesContent.find(".col-lg-12").removeClass("col-lg-12").addClass("col-lg-9");
    if (companiesContent.find(".companyDetailsCard").length == 0) {
      cLoneCompanyCard.appendTo(companiesContent.find(".companies-content"));
    }
  })


  // add skills

  var skillsForm = $(".skillsform");

  $(".addSkills").click(function () {


    var rangeLeft = $("<div class='rangeLeft'></div>");
    var rangeOutput = $("<div class='range-output'></div>");
    var rangeValue = $("<div class='rangeValue' name='output' for='range'></div>").text("0");
    rangeOutput.append(rangeValue);
    rangeLeft.append(rangeOutput);

    var inputRange = $("<div class='inputRange'></div>");
    var labelPrograming = $("<label for=''></label>").text("New skills");
    var rangeInput = $("<input name='range' type='range' min='0' max='100' value='0' class='rangeInput'>");
    inputRange.append(labelPrograming);
    inputRange.append(rangeInput);

    var skillsGroup = $("<div class='skillsFormGroup'>")

    skillsGroup.append(rangeLeft);
    skillsGroup.append(inputRange);

    skillsForm.prepend(skillsGroup);
  })

})


