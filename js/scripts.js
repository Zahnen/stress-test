$(document).ready(function() {
  $("form#stressSurvey").submit(function(event) {
    event.preventDefault();
    let badThings = [];
    let goodThings = [];


    userInput1 = $("input:checkbox[name=warningSigns]:checked").each(function() {
      const warnOutput = $(this).val();
      $("#finalSymptoms").append("<li>" + warnOutput + "</li>")
      badThings.push(warnOutput);
    });
    userInput2 = $("input:checkbox[name=symptoms]:checked").each(function() {
      const sympOutput = $(this).val();
      $("#finalSymptoms").append("<li>" + sympOutput + "</li>")
      badThings.push(sympOutput);
    })
    console.log("This is the new array" + badThings);
    userInput3 = $("input:checkbox[name=coping]:checked").each(function() {
      const copOutput = $(this).val();
      $("#finalCoping").append("<li>" + copOutput + "</li>")
      goodThings.push(copOutput);
    })

    $("#results").show();

    if (badThings.length > goodThings.length) {
      $("#suggestions").show();
    } else {
      $("#noProblems").show();
    }

    
  });
});