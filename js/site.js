﻿$(document).ready(function(){document.querySelectorAll(".subscribe").forEach(e=>{e.addEventListener("click",()=>{alert("Service unavailable at this time. Please check another time!")})})}),$(document).ready(function(){$(':input[type="submit"]').prop("disabled",!0),$("#landlordmobile").keyup(function(){$(this).val().length>9?$(':input[type="submit"]').prop("disabled",!1):$(':input[type="submit"]').prop("disabled",!0)})}),$(document).ready(function(){$(function(){$("#btn-send-email").click(function(){var a={};a.name=$("#name").val(),a.email=$("#email").val(),a.phone=$("#phone").val(),a.subject=$("#subject").val(),a.message=$("#message").val(),null!=a.name&&""!=a.name?null!=a.email&&""!=a.email?null!=a.phone&&""!=a.phone?null!=a.subject&&""!=a.subject?null!=a.message&&""!=a.message?($("#loading").show(),$("#btn-send-email").prop("disabled",!0),$.post("/home/contact",{obj:a},a=>{1==a?($("#loading").hide(),$("#success-msg").show(),$("#contactForm")[0].reset(),e()):($("#loading").hide(),$("#error-msg").show(),i())})):alert("Message is required!"):alert("Subject is required!"):alert("Phone is required!"):alert("Email is required!"):alert("Name is required!")});var e=()=>{setTimeout(()=>{$("#success-msg").hide(),$("#btn-send-email").prop("disabled",!1)},4e3)},i=()=>{setTimeout(()=>{$("#error-msg").hide(),$("#btn-send-email").prop("disabled",!1)},4e3)}})});