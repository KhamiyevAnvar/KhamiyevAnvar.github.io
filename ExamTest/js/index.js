// $(window).on("load", function () {
//   setTimeout(function () {
//     $(".polarloader").addClass("polarLoaderNone");
//   }, 1000);
// });

$(function () {
  // menu but
  var menuBut = $(".examMenuBut");
  var menuCloseBut = $(".mobileCloseBut");
  var mobileMenu = $(".mobileMenu");

  menuBut.click(function () {
    mobileMenu.removeClass("mobileMenuNone");
  });
  menuCloseBut.click(function () {
    mobileMenu.addClass("mobileMenuNone");
  });

  // Exam group click
  var examExamination = $("#examExamination");
  var examStartSection = $("#examStartSection");
  var examTestPage = $("#examTestPage");

  $("[name=examGroup]").on("click", function (e) {
    var examGroup = $(this).val();
    console.log(examGroup);
    examExamination.addClass("d-none");
    examStartSection.addClass("d-block");
    // set Group Information
    localStorage.setItem("groupInfo", JSON.stringify(examGroup));
  });

  var examEnd = $("#examEnd");

  // exam time

  var myInterval;
  var hour = 3;
  var min = 0;
  var sec = 0;

  function examTime() {
    if (min == 0 && sec == 0) {
      min = 60;
      hour--;
    }
    // minute;
    if (sec > 0) {
      sec--;
    } else if (sec == 0) {
      min--;
      sec = 59;
    }

    if (sec == 0 && min == 0 && hour == 0) {
      sec = 0;
      min = 0;
      hour = 0;
      clearInterval(myInterval);
      $(".examTestPageQuestionBlockSlide ").css("pointer-events", "none");
      examEnd.css("pointer-events", "none");
      Swal.fire({
        title: "İmtahan vaxtınız bitdi!",
        icon: "info",
      });
    }

    let innerHour = hour;
    let innerMin = min;
    let innerSec = sec;

    if (innerHour < 10) {
      innerHour = "0" + innerHour;
    }

    if (innerMin < 10) {
      innerMin = "0" + innerMin;
    }

    if (innerSec < 10) {
      innerSec = "0" + innerSec;
    }

    document.querySelector(".examTestPageClockWatch").innerText =
      innerHour + " : " + innerMin + " : " + innerSec;
  }

  // exam time  func end

  var examStartButton = $("#examStartButton");

  examStartButton.on("click", function (e) {
    examStartSection.addClass("d-none");
    examTestPage.addClass("d-block");
    myInterval = setInterval(examTime, 1000);
    startExamFunc();
  });

  function examEnded() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success examEnd",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Əminsiz?",
        text: "Siz təsdiqlədikdə imtahan bitəcək.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Bəli, imtahan bitirilsin!",
        cancelButtonText: "Xeyr, davam edirəm!",
        reverseButtons: true,
        margin: "5px",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "İmtahan bitdi!",
            text: "İmtahan müvəffəqiyyətlə tamamlandı.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "İmtahana davam edə bilərsiz",
            text: "Your imaginary file is safe :)",
            icon: "info",
          });
        }
      });
  }

  var rightAnswerArr = [
    {
      subjectName: "AzerbaycanDili",
      rightAnswers: [
        { questionNumber: "1", rightOption: "A" },
        { questionNumber: "2", rightOption: "A" },
        { questionNumber: "3", rightOption: "A" },
        { questionNumber: "4", rightOption: "A" },
        { questionNumber: "5", rightOption: "A" },
        { questionNumber: "6", rightOption: "B" },
        { questionNumber: "7", rightOption: "A" },
        { questionNumber: "8", rightOption: "C" },
        { questionNumber: "9", rightOption: "C" },
        { questionNumber: "10", rightOption: "D" },
        { questionNumber: "11", rightOption: "B" },
        { questionNumber: "12", rightOption: "A" },
        { questionNumber: "13", rightOption: "C" },
        { questionNumber: "14", rightOption: "C" },
        { questionNumber: "15", rightOption: "D" },
        { questionNumber: "16", rightOption: "B" },
        { questionNumber: "17", rightOption: "A" },
        { questionNumber: "18", rightOption: "C" },
        { questionNumber: "19", rightOption: "C" },
        { questionNumber: "20", rightOption: "D" },
        { questionNumber: "21", rightOption: "B" },
        { questionNumber: "22", rightOption: "A" },
        { questionNumber: "23", rightOption: "C" },
        { questionNumber: "24", rightOption: "C" },
        { questionNumber: "25", rightOption: "D" },
      ],
    },
    {
      subjectName: "Riyaziyyat",
      rightAnswers: [
        { questionNumber: "1", rightOption: "A" },
        { questionNumber: "2", rightOption: "A" },
        { questionNumber: "3", rightOption: "A" },
        { questionNumber: "4", rightOption: "A" },
        { questionNumber: "5", rightOption: "A" },
        { questionNumber: "6", rightOption: "B" },
        { questionNumber: "7", rightOption: "A" },
        { questionNumber: "8", rightOption: "C" },
        { questionNumber: "9", rightOption: "C" },
        { questionNumber: "10", rightOption: "D" },
        { questionNumber: "11", rightOption: "B" },
        { questionNumber: "12", rightOption: "A" },
        { questionNumber: "13", rightOption: "C" },
        { questionNumber: "14", rightOption: "C" },
        { questionNumber: "15", rightOption: "D" },
        { questionNumber: "16", rightOption: "B" },
        { questionNumber: "17", rightOption: "A" },
        { questionNumber: "18", rightOption: "C" },
        { questionNumber: "19", rightOption: "C" },
        { questionNumber: "20", rightOption: "D" },
        { questionNumber: "21", rightOption: "B" },
        { questionNumber: "22", rightOption: "A" },
        { questionNumber: "23", rightOption: "C" },
        { questionNumber: "24", rightOption: "C" },
        { questionNumber: "25", rightOption: "D" },
      ],
    },
    {
      subjectName: "Tarix",
      rightAnswers: [
        { questionNumber: "1", rightOption: "A" },
        { questionNumber: "2", rightOption: "A" },
        { questionNumber: "3", rightOption: "A" },
        { questionNumber: "4", rightOption: "A" },
        { questionNumber: "5", rightOption: "A" },
        { questionNumber: "6", rightOption: "B" },
        { questionNumber: "7", rightOption: "A" },
        { questionNumber: "8", rightOption: "C" },
        { questionNumber: "9", rightOption: "C" },
        { questionNumber: "10", rightOption: "D" },
        { questionNumber: "11", rightOption: "B" },
        { questionNumber: "12", rightOption: "A" },
        { questionNumber: "13", rightOption: "C" },
        { questionNumber: "14", rightOption: "C" },
        { questionNumber: "15", rightOption: "D" },
        { questionNumber: "16", rightOption: "B" },
        { questionNumber: "17", rightOption: "A" },
        { questionNumber: "18", rightOption: "C" },
        { questionNumber: "19", rightOption: "C" },
        { questionNumber: "20", rightOption: "D" },
        { questionNumber: "21", rightOption: "B" },
        { questionNumber: "22", rightOption: "A" },
        { questionNumber: "23", rightOption: "C" },
        { questionNumber: "24", rightOption: "C" },
        { questionNumber: "25", rightOption: "D" },
      ],
    },
  ];

  function rightAnswer() {
    let answerUpdateRight = JSON.parse(localStorage.getItem("answers"));

    answerUpdateRight.forEach((answerSubject) => {
      rightAnswerArr.forEach((optionAllSelect) => {
        if (answerSubject["subjectName"] == optionAllSelect["subjectName"]) {
          answerSubject["answer"].forEach((answerSubjectBlock) => {
            var checkdata = false;
            optionAllSelect["rightAnswers"].forEach((rightAnswerSubject) => {
              if (
                answerSubjectBlock != null &&
                answerSubjectBlock["number"] ==
                  rightAnswerSubject["questionNumber"] &&
                answerSubjectBlock["selectOption"] ==
                  rightAnswerSubject["rightOption"]
              ) {
                checkdata = true;
              }
            });

            if (answerSubjectBlock != null && checkdata) {
              $(
                ".examTestPageResultItem[subject=" +
                  answerSubject["subjectName"] +
                  "]"
              )
                .eq(answerSubjectBlock["number"] - 1)
                .addClass("examTestPageResultItemTrue");
            } else if (answerSubjectBlock != null) {
              $(
                ".examTestPageResultItem[subject=" +
                  answerSubject["subjectName"] +
                  "]"
              )
                .eq(answerSubjectBlock["number"] - 1)
                .addClass("examTestPageResultItemFalse");
            }
          });
        }
      });
    });
  }

  // dogru ve yanlis cavablarin vizual gorunusu
  function rightAnswerOption() {
    rightAnswerArr.forEach((answerSubject) => {
      var optionAll = $(".examTestPageQuestionBlockSlideItemOptionLabel");

      answerSubject["rightAnswers"].forEach((answerSubjectItem) => {
        for (const optionItem of optionAll) {
          if (
            optionItem.children[0].getAttribute("questionnumber") ==
              answerSubjectItem["questionNumber"] &&
            optionItem.children[0].getAttribute("value") ==
              answerSubjectItem["rightOption"]
          ) {
            optionItem.children[1].classList.add("rightAnswer");
          } else if (
            optionItem.children[0].getAttribute("class") ==
              "examTestPageResultItemSelect" &&
            optionItem.children[0].getAttribute("questionnumber") ==
              answerSubjectItem["questionNumber"] &&
            optionItem.children[0].getAttribute("value") !=
              answerSubjectItem["rightOption"]
          ) {
            optionItem.children[1].classList.add("wrongAnswer");
          }
        }
      });
    });
  }

  examEnd.on("click", function (e) {
    examEnded();
    const examEnde = $(".examEnd").eq(0);
    examEnde.on("click", function (e) {
      clearInterval(myInterval);
      $(".examTestPageQuestionBlockSlide ").css("pointer-events", "none");
      examEnd.css("pointer-events", "none");
      rightAnswer();
      rightAnswerOption();
    });
  });

  function startExamFunc() {
    var arrayGroup = [
      {
        id: 1,
        name: "AzerbaycanDili",
        subjectTitle: "Azerbaycan dili",
        idName: "AzerbaijanLang-tab",
        data_bs_target: "#AzerbaijanLang",
        aria_controls: "AzerbaijanLang",
        aria_selected: "true",
        classActive: "active",
        activeTab: "active",
        examTestPageResultBlock: "examTestPageResultBlock1",
        examTestPageResultItem: "examTestPageResultItem1",
        questionBlockClass: "questionBlockSlide1",
        questionNumberNameClass: "examTestPageQuestionBlockHeadName1",
        questions: [
          {
            id: 1,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "examTestPageQuestionBlockSlideItemActive",
            question: "Lorem ipsum dolor sit amet consectetur1",

            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze1A",
                optionName: "questionAze1",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze1B",
                optionName: "questionAze1",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze1C",
                optionName: "questionAze1",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze1D",
                optionName: "questionAze1",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze1E",
                optionName: "questionAze1",
              },
            ],
          },
          {
            id: 2,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur2",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze2A",
                optionName: "questionAze2",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze2B",
                optionName: "questionAze2",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze2C",
                optionName: "questionAze2",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze2D",
                optionName: "questionAze2",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze2E",
                optionName: "questionAze2",
              },
            ],
          },
          {
            id: 3,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur3",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze3A",
                optionName: "questionAze3",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze3B",
                optionName: "questionAze3",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze3C",
                optionName: "questionAze3",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze3D",
                optionName: "questionAze3",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze3E",
                optionName: "questionAze3",
              },
            ],
          },
          {
            id: 4,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur4",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze4A",
                optionName: "questionAze4",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze4B",
                optionName: "questionAze4",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze4C",
                optionName: "questionAze4",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze4D",
                optionName: "questionAze4",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze4E",
                optionName: "questionAze4",
              },
            ],
          },
          {
            id: 5,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze5A",
                optionName: "questionAze5",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze5B",
                optionName: "questionAze5",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze5C",
                optionName: "questionAze5",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze5D",
                optionName: "questionAze5",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze5E",
                optionName: "questionAze5",
              },
            ],
          },
          {
            id: 6,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze6A",
                optionName: "questionAze6",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze6B",
                optionName: "questionAze6",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze6C",
                optionName: "questionAze6",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze6D",
                optionName: "questionAze6",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze6E",
                optionName: "questionAze6",
              },
            ],
          },
          {
            id: 7,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze7A",
                optionName: "questionAze7",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze7B",
                optionName: "questionAze7",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze7C",
                optionName: "questionAze7",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze7D",
                optionName: "questionAze7",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze7E",
                optionName: "questionAze7",
              },
            ],
          },
          {
            id: 8,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze8A",
                optionName: "questionAze8",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze8B",
                optionName: "questionAze8",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze8C",
                optionName: "questionAze8",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze8D",
                optionName: "questionAze8",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze8E",
                optionName: "questionAze8",
              },
            ],
          },
          {
            id: 9,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze9A",
                optionName: "questionAze9",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze9B",
                optionName: "questionAze9",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze9C",
                optionName: "questionAze9",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze9D",
                optionName: "questionAze9",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze9E",
                optionName: "questionAze9",
              },
            ],
          },
          {
            id: 10,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze10A",
                optionName: "questionAze10",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze10B",
                optionName: "questionAze10",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze10C",
                optionName: "questionAze10",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze10D",
                optionName: "questionAze10",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze10E",
                optionName: "questionAze10",
              },
            ],
          },
          {
            id: 11,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze11A",
                optionName: "questionAze11",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze11B",
                optionName: "questionAze11",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze11C",
                optionName: "questionAze11",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze11D",
                optionName: "questionAze11",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze11E",
                optionName: "questionAze11",
              },
            ],
          },
          {
            id: 12,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze12A",
                optionName: "questionAze12",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze12B",
                optionName: "questionAze12",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze12C",
                optionName: "questionAze12",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze12D",
                optionName: "questionAze12",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze12E",
                optionName: "questionAze12",
              },
            ],
          },
          {
            id: 13,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze13A",
                optionName: "questionAze13",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze13B",
                optionName: "questionAze13",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze13C",
                optionName: "questionAze13",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze13D",
                optionName: "questionAze13",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze13E",
                optionName: "questionAze13",
              },
            ],
          },
          {
            id: 14,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze14A",
                optionName: "questionAze14",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze14B",
                optionName: "questionAze14",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze14C",
                optionName: "questionAze14",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze14D",
                optionName: "questionAze14",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze14E",
                optionName: "questionAze14",
              },
            ],
          },
          {
            id: 15,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze15A",
                optionName: "questionAze15",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze15B",
                optionName: "questionAze15",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze15C",
                optionName: "questionAze15",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze15D",
                optionName: "questionAze15",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze15E",
                optionName: "questionAze15",
              },
            ],
          },
          {
            id: 16,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze16A",
                optionName: "questionAze16",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze16B",
                optionName: "questionAze16",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze16C",
                optionName: "questionAze16",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze16D",
                optionName: "questionAze16",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze16E",
                optionName: "questionAze16",
              },
            ],
          },
          {
            id: 17,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze17A",
                optionName: "questionAze17",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze17B",
                optionName: "questionAze17",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze17C",
                optionName: "questionAze17",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze17D",
                optionName: "questionAze17",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze17E",
                optionName: "questionAze17",
              },
            ],
          },
          {
            id: 18,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur18",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze18A",
                optionName: "questionAze18",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze18B",
                optionName: "questionAze18",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze18C",
                optionName: "questionAze18",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze18D",
                optionName: "questionAze18",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze18E",
                optionName: "questionAze18",
              },
            ],
          },
          {
            id: 19,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur19",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze19A",
                optionName: "questionAze19",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze19B",
                optionName: "questionAze19",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze19C",
                optionName: "questionAze19",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze19D",
                optionName: "questionAze19",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze19E",
                optionName: "questionAze19",
              },
            ],
          },
          {
            id: 20,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur20",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze20A",
                optionName: "questionAze20",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze20B",
                optionName: "questionAze20",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze20C",
                optionName: "questionAze20",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze20D",
                optionName: "questionAze20",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze20E",
                optionName: "questionAze20",
              },
            ],
          },
          {
            id: 21,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur21",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze21A",
                optionName: "questionAze21",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze21B",
                optionName: "questionAze21",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze21C",
                optionName: "questionAze21",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze21D",
                optionName: "questionAze21",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze21E",
                optionName: "questionAze21",
              },
            ],
          },
          {
            id: 22,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur22",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze22A",
                optionName: "questionAze22",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze22B",
                optionName: "questionAze22",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze22C",
                optionName: "questionAze22",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze22D",
                optionName: "questionAze22",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze22E",
                optionName: "questionAze22",
              },
            ],
          },
          {
            id: 23,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur23",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze23A",
                optionName: "questionAz2e3",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze23B",
                optionName: "questionAze23",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze23C",
                optionName: "questionAze23",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze23D",
                optionName: "questionAze23",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze23E",
                optionName: "questionAze23",
              },
            ],
          },
          {
            id: 24,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur24",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze24A",
                optionName: "questionAze24",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze24B",
                optionName: "questionAze24",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze24C",
                optionName: "questionAze24",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze24D",
                optionName: "questionAze24",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze24E",
                optionName: "questionAze24",
              },
            ],
          },
          {
            id: 25,
            subject: "AzerbaycanDili",
            slideClass: "examTestPageQuestionBlockSlideItem1",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur25",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionAze25A",
                optionName: "questionAz25",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionAze25B",
                optionName: "questionAze25",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionAze25C",
                optionName: "questionAze25",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionAze25D",
                optionName: "questionAze25",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionAze25E",
                optionName: "questionAze25",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Riyaziyyat",
        subjectTitle: "Riyaziyyat",
        idName: "Mathematics-tab",
        data_bs_target: "#Mathematics",
        aria_controls: "Mathematics",
        aria_selected: "false",
        classActive: "false",
        activeTab: "false",
        examTestPageResultBlock: "examTestPageResultBlock2",
        examTestPageResultItem: "examTestPageResultItem2",
        questionBlockClass: "questionBlockSlide2",
        questionNumberNameClass: "examTestPageQuestionBlockHeadName2",
        questions: [
          {
            id: 1,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "examTestPageQuestionBlockSlideItemActive",
            question: "Lorem ipsum dolor sit amet consectetur1",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni12",
                optionId: "questionMat1A",
                optionName: "questionMat1",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat1B",
                optionName: "questionMat1",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat1C",
                optionName: "questionMat1",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat1D",
                optionName: "questionMat1",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat1E",
                optionName: "questionMat1",
              },
            ],
          },
          {
            id: 2,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur2",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat2A",
                optionName: "questionMat2",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat2B",
                optionName: "questionMat2",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat2C",
                optionName: "questionMat2",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat2D",
                optionName: "questionMat2",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat2E",
                optionName: "questionMat2",
              },
            ],
          },
          {
            id: 3,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur3",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat3A",
                optionName: "questionMat3",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat3B",
                optionName: "questionMat3",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat3C",
                optionName: "questionMat3",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat3D",
                optionName: "questionMat3",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat3E",
                optionName: "questionMat3",
              },
            ],
          },
          {
            id: 4,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur4",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat4A",
                optionName: "questionMat4",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat4B",
                optionName: "questionMat4",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat4C",
                optionName: "questionMat4",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat4D",
                optionName: "questionMat4",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat4E",
                optionName: "questionMat4",
              },
            ],
          },
          {
            id: 5,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat5A",
                optionName: "questionMat5",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat5B",
                optionName: "questionMat5",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat5C",
                optionName: "questionMat5",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat5D",
                optionName: "questionMat5",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat5E",
                optionName: "questionMat5",
              },
            ],
          },
          {
            id: 6,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur6",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat6A",
                optionName: "questionMat6",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat6B",
                optionName: "questionMat6",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat6C",
                optionName: "questionMat6",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat6D",
                optionName: "questionMat6",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat6E",
                optionName: "questionMat6",
              },
            ],
          },
          {
            id: 7,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur7",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat7A",
                optionName: "questionMat7",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat7B",
                optionName: "questionMat7",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat7C",
                optionName: "questionMat7",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat7D",
                optionName: "questionMat7",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat7E",
                optionName: "questionMat7",
              },
            ],
          },
          {
            id: 8,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur8",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat8A",
                optionName: "questionMat8",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat8B",
                optionName: "questionMat8",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat8C",
                optionName: "questionMat8",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat8D",
                optionName: "questionMat8",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat8E",
                optionName: "questionMat8",
              },
            ],
          },
          {
            id: 9,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur9",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat9A",
                optionName: "questionMat9",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat9B",
                optionName: "questionMat9",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat9C",
                optionName: "questionMat9",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat9D",
                optionName: "questionMat9",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat9E",
                optionName: "questionMat9",
              },
            ],
          },
          {
            id: 10,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur10",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat10A",
                optionName: "questionMat10",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat10B",
                optionName: "questionMat10",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat10C",
                optionName: "questionMat10",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat10D",
                optionName: "questionMat10",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat10E",
                optionName: "questionMat10",
              },
            ],
          },
          {
            id: 11,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur11",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat11A",
                optionName: "questionMat11",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat11B",
                optionName: "questionMat11",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat11C",
                optionName: "questionMat11",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat11D",
                optionName: "questionMat11",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat11E",
                optionName: "questionMat11",
              },
            ],
          },
          {
            id: 12,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur12",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat12A",
                optionName: "questionMat12",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat12B",
                optionName: "questionMat12",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat12C",
                optionName: "questionMat12",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat12D",
                optionName: "questionMat12",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat12E",
                optionName: "questionMat12",
              },
            ],
          },
          {
            id: 13,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur13",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat13A",
                optionName: "questionMat13",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat13B",
                optionName: "questionMat13",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat13C",
                optionName: "questionMat13",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat13D",
                optionName: "questionMat13",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat13E",
                optionName: "questionMat13",
              },
            ],
          },
          {
            id: 14,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur14",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat14A",
                optionName: "questionMat14",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat14B",
                optionName: "questionMat14",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat14C",
                optionName: "questionMat14",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat14D",
                optionName: "questionMat14",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat14E",
                optionName: "questionMat14",
              },
            ],
          },
          {
            id: 15,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur15",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat15A",
                optionName: "questionMat15",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat15B",
                optionName: "questionMat15",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat15C",
                optionName: "questionMat15",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat15D",
                optionName: "questionMat15",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat15E",
                optionName: "questionMat15",
              },
            ],
          },
          {
            id: 16,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur16",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat16A",
                optionName: "questionMat16",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat16B",
                optionName: "questionMat16",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat16C",
                optionName: "questionMat16",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat16D",
                optionName: "questionMat16",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat16E",
                optionName: "questionMat16",
              },
            ],
          },
          {
            id: 17,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur17",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat17A",
                optionName: "questionMat17",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat17B",
                optionName: "questionMat17",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat17C",
                optionName: "questionMat17",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat17D",
                optionName: "questionMat17",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat17E",
                optionName: "questionMat17",
              },
            ],
          },
          {
            id: 18,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur18",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat18A",
                optionName: "questionMat18",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat18B",
                optionName: "questionMat18",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat18C",
                optionName: "questionMat18",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat18D",
                optionName: "questionMat18",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat18E",
                optionName: "questionMat18",
              },
            ],
          },
          {
            id: 19,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur19",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat19A",
                optionName: "questionMat19",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat19B",
                optionName: "questionMat19",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat19C",
                optionName: "questionMat19",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat19D",
                optionName: "questionMat19",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat19E",
                optionName: "questionMat19",
              },
            ],
          },
          {
            id: 20,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur20",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat20A",
                optionName: "questionMat20",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat20B",
                optionName: "questionMat20",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat20C",
                optionName: "questionMat20",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat20D",
                optionName: "questionMat20",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat20E",
                optionName: "questionMat20",
              },
            ],
          },
          {
            id: 21,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur21",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat21A",
                optionName: "questionMat21",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat21B",
                optionName: "questionMat21",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat21C",
                optionName: "questionMat21",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat21D",
                optionName: "questionMat21",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat21E",
                optionName: "questionMat21",
              },
            ],
          },
          {
            id: 22,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur22",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat22A",
                optionName: "questionMat22",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat22B",
                optionName: "questionMat22",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat22C",
                optionName: "questionMat22",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat22D",
                optionName: "questionMat22",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat22E",
                optionName: "questionMat22",
              },
            ],
          },
          {
            id: 23,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur23",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat23A",
                optionName: "questionMat23",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat23B",
                optionName: "questionMat23",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat23C",
                optionName: "questionMat23",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat23D",
                optionName: "questionMat23",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat23E",
                optionName: "questionMat23",
              },
            ],
          },
          {
            id: 24,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur24",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat24A",
                optionName: "questionMat24",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat24B",
                optionName: "questionMat24",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat24C",
                optionName: "questionMat24",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat24D",
                optionName: "questionMat24",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat24E",
                optionName: "questionMat24",
              },
            ],
          },
          {
            id: 25,
            subject: "Riyaziyyat",
            slideClass: "examTestPageQuestionBlockSlideItem2",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur25",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionMat25A",
                optionName: "questionMat25",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionMat25B",
                optionName: "questionMat25",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionMat25C",
                optionName: "questionMat25",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionMat25D",
                optionName: "questionMat25",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionMat25E",
                optionName: "questionMat25",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Tarix",
        subjectTitle: "Tarix",
        idName: "History-tab",
        data_bs_target: "#History",
        aria_controls: "History",
        aria_selected: "false",
        classActive: "false",
        activeTab: "false",
        examTestPageResultBlock: "examTestPageResultBlock3",
        examTestPageResultItem: "examTestPageResultItem3",
        questionBlockClass: "questionBlockSlide3",
        questionNumberNameClass: "examTestPageQuestionBlockHeadName3",
        questions: [
          {
            id: 1,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "examTestPageQuestionBlockSlideItemActive",
            question: "Lorem ipsum dolor sit amet consectetur1",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni12",
                optionId: "questionHis1A",
                optionName: "questionHis1",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis1B",
                optionName: "questionHis1",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis1C",
                optionName: "questionHis1",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis1D",
                optionName: "questionHis1",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis1E",
                optionName: "questionHis1",
              },
            ],
          },
          {
            id: 2,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur2",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis2A",
                optionName: "questionHis2",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis2B",
                optionName: "questionHis2",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis2C",
                optionName: "questionHis2",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis2D",
                optionName: "questionHis2",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis2E",
                optionName: "questionHis2",
              },
            ],
          },
          {
            id: 3,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur3",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis3A",
                optionName: "questionHis3",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis3B",
                optionName: "questionHis3",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis3C",
                optionName: "questionHis3",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis3D",
                optionName: "questionHis3",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis3E",
                optionName: "questionHis3",
              },
            ],
          },
          {
            id: 4,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur4",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis4A",
                optionName: "questionHis4",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis4B",
                optionName: "questionHis4",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis4C",
                optionName: "questionHis4",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis4D",
                optionName: "questionHis4",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis4E",
                optionName: "questionHis4",
              },
            ],
          },
          {
            id: 5,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur5",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis5A",
                optionName: "questionHis5",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis5B",
                optionName: "questionHis5",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis5C",
                optionName: "questionHis5",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis5D",
                optionName: "questionHis5",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis5E",
                optionName: "questionHis5",
              },
            ],
          },
          {
            id: 6,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur6",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis6A",
                optionName: "questionHis6",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis6B",
                optionName: "questionHis6",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis6C",
                optionName: "questionHis6",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis6D",
                optionName: "questionHis6",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis6E",
                optionName: "questionHis6",
              },
            ],
          },
          {
            id: 7,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur7",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis7A",
                optionName: "questionHis7",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis7B",
                optionName: "questionHis7",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis7C",
                optionName: "questionHis7",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis7D",
                optionName: "questionHis7",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis7E",
                optionName: "questionHis7",
              },
            ],
          },
          {
            id: 8,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur8",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis8A",
                optionName: "questionHis8",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis8B",
                optionName: "questionHis8",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis8C",
                optionName: "questionHis8",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis8D",
                optionName: "questionHis8",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis8E",
                optionName: "questionHis8",
              },
            ],
          },
          {
            id: 9,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur9",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis9A",
                optionName: "questionHis9",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis9B",
                optionName: "questionHis9",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis9C",
                optionName: "questionHis9",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis9D",
                optionName: "questionHis9",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis9E",
                optionName: "questionHis9",
              },
            ],
          },
          {
            id: 10,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur10",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis10A",
                optionName: "questionHis10",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis10B",
                optionName: "questionHis10",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis10C",
                optionName: "questionHis10",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis10D",
                optionName: "questionHis10",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis10E",
                optionName: "questionHis10",
              },
            ],
          },
          {
            id: 11,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur11",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis11A",
                optionName: "questionHis11",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis11B",
                optionName: "questionHis11",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis11C",
                optionName: "questionHis11",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis11D",
                optionName: "questionHis11",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis11E",
                optionName: "questionHis11",
              },
            ],
          },
          {
            id: 12,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur12",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis12A",
                optionName: "questionHis12",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis12B",
                optionName: "questionHis12",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis12C",
                optionName: "questionHis12",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis12D",
                optionName: "questionHis12",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis12E",
                optionName: "questionHis12",
              },
            ],
          },
          {
            id: 13,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur13",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis13A",
                optionName: "questionHis13",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis13B",
                optionName: "questionHis13",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis13C",
                optionName: "questionHis13",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis13D",
                optionName: "questionHis13",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis13E",
                optionName: "questionHis13",
              },
            ],
          },
          {
            id: 14,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur14",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis14A",
                optionName: "questionHis14",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis14B",
                optionName: "questionHis14",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis14C",
                optionName: "questionHis14",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis14D",
                optionName: "questionHis14",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis14E",
                optionName: "questionHis14",
              },
            ],
          },
          {
            id: 15,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur15",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis15A",
                optionName: "questionHis15",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis15B",
                optionName: "questionHis15",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis15C",
                optionName: "questionHis15",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis15D",
                optionName: "questionHis15",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis15E",
                optionName: "questionHis15",
              },
            ],
          },
          {
            id: 16,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur16",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis16A",
                optionName: "questionHis16",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis16B",
                optionName: "questionHis16",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis16C",
                optionName: "questionHis16",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis16D",
                optionName: "questionHis16",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis16E",
                optionName: "questionHis16",
              },
            ],
          },
          {
            id: 17,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur17",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis17A",
                optionName: "questionHis17",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis17B",
                optionName: "questionHis17",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis17C",
                optionName: "questionHis17",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis17D",
                optionName: "questionHis17",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis17E",
                optionName: "questionHis17",
              },
            ],
          },
          {
            id: 18,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur18",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis18A",
                optionName: "questionHis18",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis18B",
                optionName: "questionHis18",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis18C",
                optionName: "questionHis18",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis18D",
                optionName: "questionHis18",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis18E",
                optionName: "questionHis18",
              },
            ],
          },
          {
            id: 19,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur19",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis19A",
                optionName: "questionHis19",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis19B",
                optionName: "questionHis19",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis19C",
                optionName: "questionHis19",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis19D",
                optionName: "questionHis19",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis19E",
                optionName: "questionHis19",
              },
            ],
          },
          {
            id: 20,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur20",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis20A",
                optionName: "questionHis20",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis20B",
                optionName: "questionHis20",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis20C",
                optionName: "questionHis20",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis20D",
                optionName: "questionHis20",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis20E",
                optionName: "questionHis20",
              },
            ],
          },
          {
            id: 21,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur21",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis21A",
                optionName: "questionHis21",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis21B",
                optionName: "questionHis21",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis21C",
                optionName: "questionHis21",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis21D",
                optionName: "questionHis21",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis21E",
                optionName: "questionHis21",
              },
            ],
          },
          {
            id: 22,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur22",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis22A",
                optionName: "questionHis22",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis22B",
                optionName: "questionHis22",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis22C",
                optionName: "questionHis22",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis22D",
                optionName: "questionHis22",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis22E",
                optionName: "questioHis22",
              },
            ],
          },
          {
            id: 23,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur23",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis23A",
                optionName: "questionHis23",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis23B",
                optionName: "questionHis23",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis23C",
                optionName: "questionHis23",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis23D",
                optionName: "questionHis23",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis23E",
                optionName: "questionHis23",
              },
            ],
          },
          {
            id: 24,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur24",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis24A",
                optionName: "questionHis24",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis24B",
                optionName: "questionHis24",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis24C",
                optionName: "questionHis24",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis24D",
                optionName: "questionHis24",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis24E",
                optionName: "questionHis24",
              },
            ],
          },
          {
            id: 25,
            subject: "Tarix",
            slideClass: "examTestPageQuestionBlockSlideItem3",
            slideClassActive: "",
            question: "Lorem ipsum dolor sit amet consectetur25",
            questionOption: [
              {
                id: 1,
                optionVal: "A",
                optionContent: "adipisicing elit. Excepturi, magni1",
                optionId: "questionHis25A",
                optionName: "questionHis25",
              },
              {
                id: 2,
                optionVal: "B",
                optionContent: "adipisicing elit. Excepturi, magni2",
                optionId: "questionHis25B",
                optionName: "questionHis25",
              },
              {
                id: 3,
                optionVal: "C",
                optionContent: "adipisicing elit. Excepturi, magni3",
                optionId: "questionHis25C",
                optionName: "questionHis25",
              },
              {
                id: 4,
                optionVal: "D",
                optionContent: "adipisicing elit. Excepturi, magni4",
                optionId: "questionHis25D",
                optionName: "questionHis25",
              },
              {
                id: 5,
                optionVal: "E",
                optionContent: "adipisicing elit. Excepturi, magni5",
                optionId: "questionHis25E",
                optionName: "questionHis25",
              },
            ],
          },
        ],
      },
    ];

    // first exam name push
    var examTestPageSubjectName = $(".examTestPageSubjectName");
    examTestPageSubjectName[0].innerHTML = arrayGroup[0]["subjectTitle"];

    var subject = [];

    // Tab Button Subject
    arrayGroup.map((data) => {
      // create local storage answers

      subject.push({
        subjectName: data["name"],
        answer: [],
      });

      // console.log(data);
      $(".examSubjects").append(`
        <button
          class="nav-link ${data["classActive"]} "
          id="${data["idName"]}"
          data-bs-toggle="pill"
          data-bs-target="${data["data_bs_target"]}"
          type="button"
          role="tab"
          aria-controls="${data["aria_controls"]}"
          aria-selected="${data["aria_selected"]}"
        >
          ${data["subjectTitle"]}
        </button>
    `);

      $(".examContent").append(`
      <div
          class="tab-pane fade show ${data["activeTab"]} "
          id="${data["aria_controls"]}"
          role="tabpanel"
          aria-labelledby="${data["idName"]}"
          tabindex="0"
        >
          <div class="row examTestPageRow2">
            <div class="col-12 col-md-3">
              <div class="examTestPageResult">
                <div class="examTestPageResultName">Cavablar</div>
                <ul class="examTestPageResultBlock ${data["examTestPageResultBlock"]}">
                  <li
                    class="examTestPageResultItem ${data["examTestPageResultItem"]}"
                   subject="${data["name"]}"
                    value="1"
                  >
                    1
                  </li>
                  <li class="examTestPageResultItem  ${data["examTestPageResultItem"]}" subject="${data["name"]}" value="2" >2</li>
                  <li class="examTestPageResultItem  ${data["examTestPageResultItem"]}" subject="${data["name"]}" value="3">3</li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]} "
                    subject="${data["name"]}"
                    value="4"
                  >
                    4
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="5"
                  >
                    5
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="6"
                  >
                    6
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="7"
                  >
                    7
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="8"
                  >
                    8
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="9"
                  >
                    9
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="10"
                  >
                    10
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="11"
                  >
                    11
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="12"
                  >
                    12
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="13"
                  >
                    13
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="14"
                  >
                    14
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="15"
                  >
                    15
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="16"
                  >
                    16
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="17"
                  >
                    17
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="18"
                  >
                    18
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="19"
                  >
                    19
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="20"
                  >
                    20
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="21"
                  >
                    21
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="22"
                  >
                    22
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="23"
                  >
                    23
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="24"
                  >
                    24
                  </li>
                  <li
                    class="examTestPageResultItem  ${data["examTestPageResultItem"]}"
                    subject="${data["name"]}"
                    value="25"
                  >
                    25
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-9">
              <div class="examTestPageQuestionBlock">
                <div class="examTestPageQuestionBlockHead">
                  <button
                    type="button"
                    class="examTestPageQuestionBeforeButton button_reset"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                      /></svg
                    ><span>Before</span>
                  </button>
                  <div class="examTestPageQuestionBlockHeadName ${data["questionNumberNameClass"]} ">
                    Sual 1
                  </div>
                  <button
                    type="button"
                    class="examTestPageQuestionNextButton button_reset"
                  >
                    <span>Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="examTestPageQuestionBlockSlide ${data["questionBlockClass"]}">
                
                
                 </div> 
              </div>
            </div>
          </div>
        </div>`);

      let questdata = data["questions"];

      questdata.map((question) => {
        $("." + data["questionBlockClass"]).append(
          `
          <div
            class="examTestPageQuestionBlockSlideItem ${question["slideClass"]}  ${question["slideClassActive"]}"
            value
          >
         
            <div
              class="examTestPageQuestionBlockSlideItemContent"
            >
              ${question["question"]}
            </div>
            
             
            
            <ul
              class="examTestPageQuestionBlockSlideItemOptions"
            >
              <li
                class="examTestPageQuestionBlockSlideItemOption"
              >
                <label
                  class="examTestPageQuestionBlockSlideItemOptionLabel"
                  for="${question["questionOption"][0]["optionId"]}"
                >
                  <input
                    type="radio"
                    subject ="${question["subject"]}"
                    name="${question["questionOption"][0]["optionName"]}"
                    id="${question["questionOption"][0]["optionId"]}"
                    questionnumber ="${question["id"]}"
                    value="A"
                  />
                  <div
                    class="examTestPageQuestionBlockSlideItemOptionName"
                  >
                    ${question["questionOption"][0]["optionVal"]}
                  </div>
                  <span
                    >
                    ${question["questionOption"][0]["optionContent"]}</span
                  >
                </label>
              </li>
              <li
                class="examTestPageQuestionBlockSlideItemOption"
              >
                <label
                  class="examTestPageQuestionBlockSlideItemOptionLabel"
                  for="${question["questionOption"][1]["optionId"]}"
                >
                  <input
                    type="radio"
                    subject ="${question["subject"]}"
                    name="${question["questionOption"][1]["optionName"]}"
                    id="${question["questionOption"][1]["optionId"]}"
                    questionnumber ="${question["id"]}"
                    value="B"
                  />
                  <div
                    class="examTestPageQuestionBlockSlideItemOptionName"
                  >
                     ${question["questionOption"][1]["optionVal"]}
                  </div>
                  <span
                    >${question["questionOption"][1]["optionContent"]}</span
                  >
                </label>
              </li>
              <li
                class="examTestPageQuestionBlockSlideItemOption"
              >
                <label
                  class="examTestPageQuestionBlockSlideItemOptionLabel"
                  for="${question["questionOption"][2]["optionId"]}"
                >
                  <input
                    type="radio"
                    subject ="${question["subject"]}"
                    name="${question["questionOption"][2]["optionName"]}"
                    id="${question["questionOption"][2]["optionId"]}"
                    questionnumber ="${question["id"]}"
                    value="C"
                  />
                  <div
                    class="examTestPageQuestionBlockSlideItemOptionName"
                  >
                     ${question["questionOption"][2]["optionVal"]}
                  </div>
                  <span
                    >${question["questionOption"][2]["optionContent"]}</span
                  >
                </label>
              </li>
              <li
                class="examTestPageQuestionBlockSlideItemOption"
              >
                <label
                  class="examTestPageQuestionBlockSlideItemOptionLabel"
                  for="${question["questionOption"][3]["optionId"]}"
                >
                  <input
                    type="radio"
                    subject ="${question["subject"]}"
                    name="${question["questionOption"][3]["optionName"]}"
                    id="${question["questionOption"][3]["optionId"]}"
                    questionnumber ="${question["id"]}"
                    value="D"
                  />
                  <div
                    class="examTestPageQuestionBlockSlideItemOptionName"
                  >
                     ${question["questionOption"][3]["optionVal"]}
                  </div>
                  <span
                    >${question["questionOption"][3]["optionContent"]}</span
                  >
                </label>
              </li>
              <li
                class="examTestPageQuestionBlockSlideItemOption"
              >
                <label
                  class="examTestPageQuestionBlockSlideItemOptionLabel"
                  for="${question["questionOption"][4]["optionId"]}"
                >
                  <input
                    type="radio"
                    subject ="${question["subject"]}"
                    name="${question["questionOption"][4]["optionName"]}"
                    id="${question["questionOption"][4]["optionId"]}"
                    questionnumber ="${question["id"]}"
                    value="E"
                  />
                  <div
                    class="examTestPageQuestionBlockSlideItemOptionName"
                  >
                     ${question["questionOption"][4]["optionVal"]}
                  </div>
                  <span
                    >${question["questionOption"][4]["optionContent"]}</span
                  >
                </label>
              </li>
            </ul>
          </div>`
        );
      });
    });

    // set answers exam
    localStorage.setItem("answers", JSON.stringify(subject));

    // Click Tab Button change Subject Name
    $(".nav-link").on("click", function () {
      $(".examTestPageSubjectName").text($(this).text());
    });

    // Tab 1
    // before after button
    var examBeforeButton1 = $(".examTestPageQuestionBeforeButton").eq(0);
    var examAfterButton1 = $(".examTestPageQuestionNextButton").eq(0);

    var examTestPageQuestionBlockSlideItem1 = document.querySelectorAll(
      ".examTestPageQuestionBlockSlideItem1"
    );

    // page value
    var currentVal = 1;

    function activelink(event, buttonPos) {
      currentVal = event.target.value;
      console.log("currentVal1 : " + currentVal);
      buttonPos.forEach((element) => {
        element.classList.remove("examTestPageQuestionBlockSlideItemActive");
      });
      $(".examTestPageQuestionBlockHeadName1").text("Sual " + currentVal);
      buttonPos[currentVal - 1].classList.add(
        "examTestPageQuestionBlockSlideItemActive"
      );
    }

    var activeResultBut = $(".examTestPageResultItem1");

    activeResultBut.on("click", function () {
      activelink(event, examTestPageQuestionBlockSlideItem1);
    });

    function backButton1(slideitem) {
      if (currentVal > 1) {
        // console.log(currentVal);
        slideitem.forEach((element) => {
          element.classList.remove("examTestPageQuestionBlockSlideItemActive");
        });
        currentVal--;
        $(".examTestPageQuestionBlockHeadName1").text("Sual " + currentVal);
        slideitem[currentVal - 1].classList.add(
          "examTestPageQuestionBlockSlideItemActive"
        );
      }
    }

    function nextButton1(slideitem) {
      if (currentVal < 25) {
        // console.log(currentVal);
        slideitem.forEach((element) => {
          element.classList.remove("examTestPageQuestionBlockSlideItemActive");
        });
        currentVal++;

        $(".examTestPageQuestionBlockHeadName1").text("Sual " + currentVal);
        slideitem[currentVal - 1].classList.add(
          "examTestPageQuestionBlockSlideItemActive"
        );
      }
    }

    examBeforeButton1.on("click", function () {
      backButton1(examTestPageQuestionBlockSlideItem1);
    });

    examAfterButton1.on("click", function () {
      nextButton1(examTestPageQuestionBlockSlideItem1);
    });

    // Tab 2
    // before after button
    var examBeforeButton2 = $(".examTestPageQuestionBeforeButton").eq(1);
    var examAfterButton2 = $(".examTestPageQuestionNextButton").eq(1);

    console.log($(".examTestPageQuestionNextButton"));

    var examTestPageQuestionBlockSlideItem2 = document.querySelectorAll(
      ".examTestPageQuestionBlockSlideItem2"
    );

    // page value
    var currentVal2 = 1;

    function activelink1(event, buttonPos) {
      currentVal2 = event.target.value;
      console.log("currentVal2 : " + currentVal2);
      buttonPos.forEach((element) => {
        element.classList.remove("examTestPageQuestionBlockSlideItemActive");
      });
      $(".examTestPageQuestionBlockHeadName2").text("Sual " + currentVal2);
      buttonPos[currentVal2 - 1].classList.add(
        "examTestPageQuestionBlockSlideItemActive"
      );
    }

    var activeResultBut2 = $(".examTestPageResultItem2");

    activeResultBut2.on("click", function () {
      activelink1(event, examTestPageQuestionBlockSlideItem2);
    });

    function backButton2(slideitem) {
      if (currentVal2 > 1) {
        // console.log(currentVal2);
        slideitem.forEach((element) => {
          element.classList.remove("examTestPageQuestionBlockSlideItemActive");
        });
        currentVal2--;
        $(".examTestPageQuestionBlockHeadName2").text("Sual " + currentVal2);
        slideitem[currentVal2 - 1].classList.add(
          "examTestPageQuestionBlockSlideItemActive"
        );
      }
    }

    function nextButton2(slideitem) {
      if (currentVal2 < 25) {
        // console.log(currentVal2);
        slideitem.forEach((element) => {
          element.classList.remove("examTestPageQuestionBlockSlideItemActive");
        });
        currentVal2++;

        $(".examTestPageQuestionBlockHeadName2").text("Sual " + currentVal2);
        slideitem[currentVal2 - 1].classList.add(
          "examTestPageQuestionBlockSlideItemActive"
        );
      }
    }

    examBeforeButton2.on("click", function () {
      backButton2(examTestPageQuestionBlockSlideItem2);
    });

    examAfterButton2.on("click", function () {
      nextButton2(examTestPageQuestionBlockSlideItem2);
    });

    // Tab 3
    // before after button
    var examBeforeButton3 = $(".examTestPageQuestionBeforeButton").eq(2);
    var examAfterButton3 = $(".examTestPageQuestionNextButton").eq(2);

    // console.log($(".examTestPageQuestionNextButton"));

    var examTestPageQuestionBlockSlideItem3 = document.querySelectorAll(
      ".examTestPageQuestionBlockSlideItem3"
    );

    // page value
    var currentVal3 = 1;

    function activelink3(event, buttonPos) {
      currentVal3 = event.target.value;
      console.log("currentVal3 : " + currentVal3);
      buttonPos.forEach((element) => {
        element.classList.remove("examTestPageQuestionBlockSlideItemActive");
      });
      $(".examTestPageQuestionBlockHeadName3").text("Sual " + currentVal3);
      buttonPos[currentVal3 - 1].classList.add(
        "examTestPageQuestionBlockSlideItemActive"
      );
    }

    var activeResultBut3 = $(".examTestPageResultItem3");

    activeResultBut3.on("click", function () {
      activelink3(event, examTestPageQuestionBlockSlideItem3);
    });

    function backButton3(slideitem) {
      if (currentVal3 > 1) {
        // console.log(currentVal2);
        slideitem.forEach((element) => {
          element.classList.remove("examTestPageQuestionBlockSlideItemActive");
        });
        currentVal3--;
        $(".examTestPageQuestionBlockHeadName3").text("Sual " + currentVal3);
        slideitem[currentVal3 - 1].classList.add(
          "examTestPageQuestionBlockSlideItemActive"
        );
      }
    }

    function nextButton3(slideitem) {
      if (currentVal3 < 25) {
        slideitem.forEach((element) => {
          element.classList.remove("examTestPageQuestionBlockSlideItemActive");
        });
        currentVal3++;

        $(".examTestPageQuestionBlockHeadName3").text("Sual " + currentVal3);
        slideitem[currentVal3 - 1].classList.add(
          "examTestPageQuestionBlockSlideItemActive"
        );
      }
    }

    examBeforeButton3.on("click", function () {
      backButton3(examTestPageQuestionBlockSlideItem3);
    });

    examAfterButton3.on("click", function () {
      nextButton3(examTestPageQuestionBlockSlideItem3);
    });

    // get local storage answer for update
    var answer = JSON.parse(localStorage.getItem("answers"));

    $(".examContent  input[type=radio]").on("click", function (e) {
      answer.forEach((sub) => {
        if (sub.subjectName == $(this).attr("subject")) {
          sub.answer[$(this).attr("questionnumber") - 1] = {
            number: $(this).attr("questionnumber"),
            selectOption: $(this).attr("value"),
          };
        }

        localStorage.setItem("answers", JSON.stringify(answer));
      });

      // tab 1
      if (
        $(this).attr("subject") == $(".examTestPageResultItem1").attr("subject")
      ) {
        $(this).addClass("examTestPageResultItemSelect");
        // console.log(1);
        $(".examTestPageResultItem1")
          .eq($(this).attr("questionnumber") - 1)
          .addClass("examTestPageResultItemSelect");
        // $(".examTestPageResultItem1")
        //   .eq($(this).attr("questionnumber") - 1)
        //   .text($(this).attr("value"));
      }
      // tab 2
      if (
        $(this).attr("subject") == $(".examTestPageResultItem2").attr("subject")
      ) {
        $(this).addClass("examTestPageResultItemSelect");
        // console.log(2);
        $(".examTestPageResultItem2")
          .eq($(this).attr("questionnumber") - 1)
          .addClass("examTestPageResultItemSelect");
        $(".examTestPageResultItem2")
          .eq($(this).attr("questionnumber") - 1)
          .text($(this).attr("value"));
      }
      // tab 3
      if (
        $(this).attr("subject") == $(".examTestPageResultItem3").attr("subject")
      ) {
        $(this).addClass("examTestPageResultItemSelect");
        // console.log(2);
        $(".examTestPageResultItem3")
          .eq($(this).attr("questionnumber") - 1)
          .addClass("examTestPageResultItemSelect");
        $(".examTestPageResultItem3")
          .eq($(this).attr("questionnumber") - 1)
          .text($(this).attr("value"));
      }

      console.log(answer);
    });
  }
});

// Design
