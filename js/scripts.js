$(document).ready(function() {
  $("form#stressSurvey").submit(function(event) {
    event.preventDefault();


    userInput = $("input:checkbox[name=warningSigns]:checked").each(function() {
      const warnOutput = $(this).val();
      $("#finalSymptoms").append("<li>" + warnOutput + "</li>")
    });


    $("#suggestions").show();
  });
});