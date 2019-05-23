    mongoose.connect('mongodb://172.17.0.2:27017/test', {useNewUrlParser: true});
    const Cat = mongoose.model('Cat', { name: String });

    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));
    Cat.find().then() => res.send(res)
