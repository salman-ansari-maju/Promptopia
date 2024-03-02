const { Schema, model, models } = require("mongoose");

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is requires."],
  },
  tag: {
    type: String,
    required: [true, "Prompt is requires."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
