import $ from 'jquery';
import './fonts.css'

const body = $('body');

const p = $("<p></p>").text("Inserindo text").css("color", "red");

body.append(p)