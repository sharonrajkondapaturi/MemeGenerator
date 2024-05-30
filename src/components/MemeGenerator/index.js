import {Component} from 'react'
import {
  Heading,
  Form,
  Input,
  Label,
  Container,
  Select,
  Button,
  Flexbox,
  GeneratedImage,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    currentOptionId: '',
    currentBgImage: '',
    currentTopText: '',
    currentBottomText: '',
    currentCondition: false,
    bgImage: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }
  changeBgImage = event => {
    this.setState({bgImage: event.target.value})
  }
  changeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  submitTheMeme = event => {
    event.preventDefault()
    const {topText, bottomText, bgImage, fontSize} = this.state
    this.setState({
      currentBgImage: bgImage,
      currentBottomText: bottomText,
      currentTopText: topText,
      currentOptionId: fontSize,
    })
  }
  render() {
    const {
      fontSize,
      topText,
      bottomText,
      bgImage,
      currentBgImage,
      currentBottomText,
      currentTopText,
      currentOptionId,
    } = this.state
    return (
      <Container data-testid="meme">
        <Heading>Meme Generator</Heading>
        <Flexbox>
          <Form onSubmit={this.submitTheMeme}>
            <Label htmlFor="image">Image URL</Label>
            <Input
              placeholder="Enter the image Url"
              value={bgImage}
              id="image"
              onChange={this.changeBgImage}
            ></Input>
            <Label htmlFor="top">Top Text</Label>
            <Input
              placeholder="Top Text"
              value={topText}
              id="top"
              onChange={this.changeTopText}
            ></Input>
            <Label htmlFor="bottom">Bottom Text</Label>
            <Input
              placeholder="bottom Text"
              id="bottom"
              value={bottomText}
              onChange={this.changeBottomText}
            ></Input>
            <Label htmlFor="fontSize">Font Size</Label>
            <Select
              value={fontSize}
              id="fontSize"
              onChange={this.changeFontSize}
            >
              {fontSizesOptionsList.map(eachFont => (
                <option key={eachFont.optionId} value={eachFont.optionId}>
                  {eachFont.displayText}
                </option>
              ))}
            </Select>
            <Button type="submit">Generate</Button>
          </Form>
          <GeneratedImage bgImage={currentBgImage}>
            <Text font={currentOptionId}>{currentTopText}</Text>
            <Text font={currentOptionId}>{currentBottomText}</Text>
          </GeneratedImage>
        </Flexbox>
      </Container>
    )
  }
}

export default MemeGenerator
