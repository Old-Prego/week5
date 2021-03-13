// TODO: Header
    // TODO: Title and current date/time
    // TODO: setinterval thingy looping every 1000ms and changing header to moment().format

// TODO: Bootstrap Stuff
    // TODO: Tables - Will

var CurrentDate = moment().format("MMM DD, YYYY h:m:ss a");
$("#TimeStamp").text(CurrentDate);

var dialog = $("modal-add").dialog({
    autoOpen: true,
    modal: true
})

$("#modalBtn").click(function(){
    $("#modal-add").dialog({
        appendTo: 'body',
        title: "Dialog Title"
    })
})