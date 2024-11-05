const ValidateLanguage = (req,res,next)=>{
      const language = req.params.language;
      if (language != "hindi" && language != "english") {
        res.status(400).json({
          message: `${language} is not supported, only hindi and english are supported`,
        });
      }else{
            next()
      }
}
module.exports = ValidateLanguage