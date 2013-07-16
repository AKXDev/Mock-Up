
$(document).ready(function() {
    $(".tabs").tabs(
        { active: 0,
            event: "mouseover"
        });
    /* Top Documents Tabs */
    var docTabValue = $('#top_docs option:selected').val();
    $('#docTabs div#' + docTabValue).show();
    $('select#top_docs').change(
        function() {
            //var documentsArray = ["top", "operations", "training", "lessons", "publications", "force"]
            var docTabValue = $('#top_docs option:selected').val();
            $('#docTabs div#top').hide('fast');
            $('#docTabs div#operations').hide('fast');
            $('#docTabs div#training').hide('fast');
            $('#docTabs div#lessons').hide('fast');
            $('#docTabs div#publications').hide('fast');
            $('#docTabs div#force').hide('fast');
            $("#" + docTabValue).toggle('fast');
        });
    /* Top Announcements Tabs */
    var docTabValue = $('#top_announce option:selected').val();
    $('div#' + docTabValue).show();
    $('select#top_announce').change(
        function() {
            var docTabValue = $('#top_announce option:selected').val();
            $('div#top_announcements').hide('fast');
            $('div#operations_announcements').hide('fast');
            $('div#training_announcements').hide('fast');
            $('div#lessons_announcements').hide('fast');
            $('div#publications_announcements').hide('fast');
            $('div#force_announcements').hide('fast');
            $("#" + docTabValue).toggle('fast');
        });
    /* Top Videos Tabs */
    var docTabValue = $('#top_vids option:selected').val();
    $('div#' + docTabValue).show();
    $('select#top_vids').change(
        function() {
            var docTabValue = $('#top_vids option:selected').val();
            $('div#top_videos').hide('fast');
            $('div#operations_videos').hide('fast');
            $('div#training_videos').hide('fast');
            $('div#lessons_videos').hide('fast');
            $('div#publications_videos').hide('fast');
            $('div#force_videos').hide('fast');
            $("#" + docTabValue).toggle('fast');
        });
});
