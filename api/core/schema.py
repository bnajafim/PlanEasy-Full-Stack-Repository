import graphene
from graphene.types.generic import GenericScalar
from graphene_django import DjangoObjectType

from core.models import ExampleModel


class ExampleType(DjangoObjectType):
    class Meta:
        model = ExampleModel

class Query(graphene.ObjectType):
    examples = graphene.List(ExampleType)
    message = graphene.String(args={'text': graphene.String()})

    def resolve_examples(self, info):
        return ExampleModel.objects.all()

    def resolve_message(self, info, text):
        return f"The passed in text was: {text}"



class PlaceholderMutation(graphene.Mutation):
    class Arguments:
        # The input arguments for this mutation
        num1 = graphene.Int()
        num2 = graphene.Int()

    # what the mutation returns
    output = graphene.Int()
    message = graphene.String()

    def mutate(self, info, num1, num2):
        result = num1 + num2
        return PlaceholderMutation(output=result, message="Added given numbers together")


class Mutation(graphene.ObjectType):
    placeholder_mutation = PlaceholderMutation.Field()
