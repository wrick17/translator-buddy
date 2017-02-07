# translator-buddy

#### easily generate strings.xml content from your existing strings.xml content and the translation file

The app is live at [https://strgen.surge.sh](https://strgen.surge.sh)

Usage:

To use the app, just upload the language and strings files and hit the generate button.


* The language file (eg: lang.txt)
> the content of the file should be as follows:
> ```
> english
> foreign language
> english
> foreign language
> ```
> example:
> ```
> i am awesome
> Soy increíble
> that's true
> es verdad
> so true
> tan verdadero
> ```

* The strings file (eg: strings.txt)
> the content of the file should be as follows:
> ```
> <string name="awesome_text">I am awesome</string>
> <string name="true_text">that's true</string>
> <string name="true_text_alt">so true</string>
> ```
> It would generate:
> ```
> <string name="awesome_text">Soy increíble</string>
> <string name="true_text">es verdad</string>
> <string name="true_text_alt">tan verdadero</string>
> ```

### Notes:

The match is case sensetive, so unless the full string matches the replacement won't be made. So please make sure your language file matches the strings file.

Each string should be in one single line. Make sure no text is broken down to multiple lines

The app has been built with a happy flow in mind, so it is only going to work if you have followed everything properly and there are no corner cases.

Happy converting!!
