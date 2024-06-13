
prediction = ""
Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    pnh_quality:90
});


camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lLYIibOQE/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction =  results[0].label;
        speak();
        if(results[0].label == "👌"){
            document.getElementById("update_gesture").innerHTML = "👌"
        }
        if(results[0].label == "👍"){
            document.getElementById("update_gesture").innerHTML = "👍"
        }
        if(results[0].label == "✌️"){
            document.getElementById("update_gesture").innerHTML = "✌️"
        }
    }


}