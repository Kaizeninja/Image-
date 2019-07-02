class Image 
  
  def initialize (pix)
    @pix = pix 
  end 

  def output_image 
    @pix.each do |x|
      puts x.join 
    end
  end
end 

    image = Image.new([
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
])

image.output_image


