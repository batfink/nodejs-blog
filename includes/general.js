exports.blogHomeImageUrl = blogHomeImageUrl

function blogHomeImageUrl(bloghome) {
    if (!bloghome) {
        return '';
    }
    var image = bloghome.getImage('bloghome.image');
    if (image) {
        return image.getView("main").url ;
    }
}

exports.postImageUrl = postImageUrl

function postImageUrl(post) {
    if (!post) {
        return '';
    }
    var image = post.getImage('post.image');
    if (image) {
        return image.getView("main").url ;
    }
}

exports.blogHomeTile = blogHomeTile

function blogHomeTile(bloghome) {
    if (!bloghome) {
        return '';
    }
    return bloghome.getText('bloghome.headline') ;
}

exports.postTile = postTile

function postTile(post) {
    if (!post) {
        return '';
    }
    return post.getText('post.title') ;
}

exports.postDescription = postDescription

function postDescription(post) {
    if (!post) {
        return '';
    }
    return post.getText('post.shortlede') ;
}

exports.blogHomeDescription = blogHomeDescription

function blogHomeDescription(bloghome) {
    if (!bloghome) {
        return '';
    }
    return bloghome.getText('bloghome.description') ;
}

var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

exports.getDate = getDate
function getDate(post) {
    var date = post.getDate('post.date')
    if (date) {
        var formatedDate = month_names_short[date.getUTCMonth()] + ', ' + date.getDay() + (date.getDay() == 1? 'st ' : 'th ') + date.getUTCFullYear()
        return formatedDate
    }
}

exports.getAuthor = getAuthor

function getAuthor(post) {
    return 'The author name'
}

exports.firstStructuredTextsFromSlices = firstStructuredTextsFromSlices

function firstStructuredTextsFromSlices(slices) {
    return slices.filter(function(slice) {
        return slice.sliceType == 'text'
    })[0].value
}