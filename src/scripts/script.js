let neonIsActive = false;
let hideIsActive = false;
let solidIsActive = false;

$(document).ready(function () {
  //Hidden Content
  $("#sideMenu").hide();
  $(".job-title").hide();

  $(".auth-sections").click(function () {
    $(".job-title").toggle();
  });

  //Menu Button
  $("#mainBtn").click(function () {
    $("#sideMenu").toggle("slow");
  });

  //Neon Button
  $("#neonBtn").click(function () {
    if (neonIsActive === false) {
      $("ef").css("color", "rgb(142, 139, 255)");
      $(".auth-title").css("color", "rgb(142, 139, 255)");
      $("#neonBtn").val("Normal");
      $("#other-title").css("color", "rgb(142, 139, 255)");
      neonIsActive = true;
    } else {
      $("ef").css("color", "rgb(255, 242, 149)");
      $(".auth-title").css("color", "rgb(255, 242, 149)");
      $("#neonBtn").val("Neon");
      $("#other-title").css("color", "rgb(255, 242, 149)");
      neonIsActive = false;
    }
  });

  //Hide Button
  $("#hideBtn").click(function () {
    if (hideIsActive === false) {
      $("nav").hide();
      $("#hideBtn").val("Show");
      hideIsActive = true;
    } else {
      $("nav").show();
      $("#hideBtn").val("Hide");
      hideIsActive = false;
    }
  });

  //Solid Button
  $("#solidBtn").click(function () {
    if (solidIsActive === false) {
      $("#navBar").css("backgroundColor", "rgb(234, 234, 234)");
      $("#sideMenu").css("backgroundColor", "rgb(234, 234, 234)");
      $("#solidBtn").val("Stars");
      solidIsActive = true;
    } else {
      $("#navBar").css("backgroundColor", "rgba(255, 255, 255, 0.603)");
      $("#sideMenu").css("backgroundColor", "rgba(255, 255, 255, 0.603)");
      $("#solidBtn").val("Solid");
      solidIsActive = false;
    }
  });

  //Reset Button
  $("#resetBtn").click(function () {
    $("ef").css("color", "rgb(255, 242, 149)");
    $(".auth-title").css("color", "rgb(255, 242, 149)");
    $("#other-title").css("color", "rgb(255, 242, 149)");
    $("#neonBtn").val("Neon");
    neonIsActive = false;

    $("nav").show();
    $("#hideBtn").val("Hide");
    hideIsActive = false;

    $("#navBar").css("backgroundColor", "rgba(255, 255, 255, 0.603)");
    $("#sideMenu").css("backgroundColor", "rgba(255, 255, 255, 0.603)");
    $("#solidBtn").val("Solid");
    solidIsActive = false;
  });
});
